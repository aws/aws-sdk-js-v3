import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptHandshakeRequest {
  __type?: "AcceptHandshakeRequest";
  /**
   * <p>The unique identifier (ID) of the handshake that you want to accept.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   */
  HandshakeId: string | undefined;
}

export namespace AcceptHandshakeRequest {
  export const filterSensitiveLog = (obj: AcceptHandshakeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptHandshakeRequest =>
    __isa(o, "AcceptHandshakeRequest");
}

export interface AcceptHandshakeResponse {
  __type?: "AcceptHandshakeResponse";
  /**
   * <p>A structure that contains details about the accepted handshake.</p>
   */
  Handshake?: Handshake;
}

export namespace AcceptHandshakeResponse {
  export const filterSensitiveLog = (obj: AcceptHandshakeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptHandshakeResponse =>
    __isa(o, "AcceptHandshakeResponse");
}

/**
 * <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *         <i>IAM User Guide.</i>
 *          </p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

/**
 * <p>The operation that you attempted requires you to have the
 *         <code>iam:CreateServiceLinkedRole</code> for <code>organizations.amazonaws.com</code>
 *       permission so that AWS Organizations can create the required service-linked role. You don't have that
 *       permission.</p>
 */
export interface AccessDeniedForDependencyException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedForDependencyException";
  $fault: "client";
  Message?: string;
  Reason?: AccessDeniedForDependencyExceptionReason | string;
}

export namespace AccessDeniedForDependencyException {
  export const filterSensitiveLog = (
    obj: AccessDeniedForDependencyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedForDependencyException =>
    __isa(o, "AccessDeniedForDependencyException");
}

export enum AccessDeniedForDependencyExceptionReason {
  ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE = "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE"
}

/**
 * <p>Contains information about an AWS account that is a member of an organization.</p>
 */
export interface Account {
  __type?: "Account";
  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The email address associated with the AWS account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for this parameter is a string of characters that represents a
   *       standard internet email address.</p>
   */
  Email?: string;

  /**
   * <p>The unique identifier (ID) of the account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   */
  Id?: string;

  /**
   * <p>The method by which the account joined the organization.</p>
   */
  JoinedMethod?: AccountJoinedMethod | string;

  /**
   * <p>The date the account became a part of the organization.</p>
   */
  JoinedTimestamp?: Date;

  /**
   * <p>The friendly name of the account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name?: string;

  /**
   * <p>The status of the account in the organization.</p>
   */
  Status?: AccountStatus | string;
}

export namespace Account {
  export const filterSensitiveLog = (obj: Account): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
    ...(obj.Name && { Name: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is Account => __isa(o, "Account");
}

export enum AccountJoinedMethod {
  CREATED = "CREATED",
  INVITED = "INVITED"
}

/**
 * <p> We can't find an AWS account with the <code>AccountId</code> that you specified. Or the
 *       account whose credentials you used to make this request isn't a member of an
 *       organization.</p>
 */
export interface AccountNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccountNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AccountNotFoundException {
  export const filterSensitiveLog = (obj: AccountNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountNotFoundException =>
    __isa(o, "AccountNotFoundException");
}

/**
 * <p>You can't invite an existing account to your organization until you verify that you own
 *       the email address associated with the master account. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_create.html#about-email-verification">Email Address
 *         Verification</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 */
export interface AccountOwnerNotVerifiedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccountOwnerNotVerifiedException";
  $fault: "client";
  Message?: string;
}

export namespace AccountOwnerNotVerifiedException {
  export const filterSensitiveLog = (
    obj: AccountOwnerNotVerifiedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountOwnerNotVerifiedException =>
    __isa(o, "AccountOwnerNotVerifiedException");
}

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED"
}

export enum ActionType {
  ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE = "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE",
  APPROVE_ALL_FEATURES = "APPROVE_ALL_FEATURES",
  ENABLE_ALL_FEATURES = "ENABLE_ALL_FEATURES",
  INVITE_ACCOUNT_TO_ORGANIZATION = "INVITE"
}

/**
 * <p>This account is already a member of an organization. An account can belong to only one
 *       organization at a time.</p>
 */
export interface AlreadyInOrganizationException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyInOrganizationException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyInOrganizationException {
  export const filterSensitiveLog = (
    obj: AlreadyInOrganizationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlreadyInOrganizationException =>
    __isa(o, "AlreadyInOrganizationException");
}

export interface AttachPolicyRequest {
  __type?: "AttachPolicyRequest";
  /**
   * <p>The unique identifier (ID) of the policy that you want to attach to the target. You can
   *       get the ID for the policy by calling the <a>ListPolicies</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root, OU, or account that you want to attach the policy
   *       to. You can get the ID by calling the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a>
   *       operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  TargetId: string | undefined;
}

export namespace AttachPolicyRequest {
  export const filterSensitiveLog = (obj: AttachPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachPolicyRequest =>
    __isa(o, "AttachPolicyRequest");
}

/**
 * <p>Your account isn't a member of an organization. To make this request, you must use the
 *       credentials of an account that belongs to an organization.</p>
 */
export interface AWSOrganizationsNotInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "AWSOrganizationsNotInUseException";
  $fault: "client";
  Message?: string;
}

export namespace AWSOrganizationsNotInUseException {
  export const filterSensitiveLog = (
    obj: AWSOrganizationsNotInUseException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AWSOrganizationsNotInUseException =>
    __isa(o, "AWSOrganizationsNotInUseException");
}

export interface CancelHandshakeRequest {
  __type?: "CancelHandshakeRequest";
  /**
   * <p>The unique identifier (ID) of the handshake that you want to cancel. You can get the ID
   *       from the <a>ListHandshakesForOrganization</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   */
  HandshakeId: string | undefined;
}

export namespace CancelHandshakeRequest {
  export const filterSensitiveLog = (obj: CancelHandshakeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelHandshakeRequest =>
    __isa(o, "CancelHandshakeRequest");
}

export interface CancelHandshakeResponse {
  __type?: "CancelHandshakeResponse";
  /**
   * <p>A structure that contains details about the handshake that you canceled.</p>
   */
  Handshake?: Handshake;
}

export namespace CancelHandshakeResponse {
  export const filterSensitiveLog = (obj: CancelHandshakeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelHandshakeResponse =>
    __isa(o, "CancelHandshakeResponse");
}

/**
 * <p>Contains a list of child entities, either OUs or accounts.</p>
 */
export interface Child {
  __type?: "Child";
  /**
   * <p>The unique identifier (ID) of this child entity.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>Account: A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit (OU): A string that begins with "ou-" followed by from 4 to 32
   *           lower-case letters or digits (the ID of the root that contains the OU). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lower-case letters or digits.</p>
   *             </li>
   *          </ul>
   */
  Id?: string;

  /**
   * <p>The type of this child entity.</p>
   */
  Type?: ChildType | string;
}

export namespace Child {
  export const filterSensitiveLog = (obj: Child): any => ({
    ...obj
  });
  export const isa = (o: any): o is Child => __isa(o, "Child");
}

/**
 * <p>We can't find an organizational unit (OU) or AWS account with the <code>ChildId</code>
 *       that you specified.</p>
 */
export interface ChildNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ChildNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ChildNotFoundException {
  export const filterSensitiveLog = (obj: ChildNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChildNotFoundException =>
    __isa(o, "ChildNotFoundException");
}

export enum ChildType {
  ACCOUNT = "ACCOUNT",
  ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
}

/**
 * <p>The target of the operation is currently being modified by a different request. Try again
 *       later.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (
    obj: ConcurrentModificationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentModificationException =>
    __isa(o, "ConcurrentModificationException");
}

/**
 * <p>Performing this operation violates a minimum or maximum value limit. Examples include
 *       attempting to remove the last service control policy (SCP) from an OU or root, or  attaching
 *       too many policies to an account, OU, or root. This exception includes a reason that contains
 *       additional information about the violated limit.</p>
 *          <p>Some of the reasons in the following list might not be applicable to this specific API or
 *       operation:</p>
 *          <ul>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA: You attempted to remove an account from the
 *           organization that doesn't yet have enough information to exist as a standalone account.
 *           This account requires you to first agree to the AWS Customer Agreement. Follow the steps
 *           at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To
 *             leave an organization when all required account information has not yet been
 *             provided</a> in the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: You attempted to remove an account
 *           from the organization that doesn't yet have enough information to exist as a standalone
 *           account. This account requires you to first complete phone verification. Follow the steps
 *           at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To
 *             leave an organization when all required account information has not yet been
 *             provided</a> in the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of accounts
 *           that you can create in one day.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number of
 *           accounts in an organization. If you need more accounts, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a> to request an increase in your
 *           limit. </p>
 *                <p>Or the number of invitations that you tried to send would cause you to exceed the
 *           limit of accounts in your organization. Send fewer invitations or contact AWS Support to
 *           request an increase in the number of accounts.</p>
 *                <note>
 *                   <p>Deleted and closed accounts still count toward your limit.</p>
 *                </note>
 *                <important>
 *                   <p>If you get receive this exception when running a command immediately after creating
 *             the organization, wait one hour and try again. If after an hour it continues to fail
 *             with this error, contact <a href="https://console.aws.amazon.com/support/home#/">AWS
 *             Support</a>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of handshakes that
 *           you can send in one day.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: To create an account in this
 *           organization, you first must migrate the organization's master account to the marketplace
 *           that corresponds to the master account's address. For example, accounts with India
 *           addresses must be associated with the AISPL marketplace. All accounts in an organization
 *           must be associated with the same marketplace.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_MISSING_CONTACT_INFO: To complete this operation, you must first
 *           provide contact a valid address and phone number for the master account. Then try the
 *           operation again.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED: To complete this operation, the master account
 *           must have an associated account in the AWS GovCloud (US-West) Region. For more
 *           information, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the
 *           <i>AWS GovCloud User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To create an organization with this master
 *           account, you first must associate a valid payment instrument, such as a credit card, with
 *           the account. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an
 *             organization when all required account information has not yet been provided</a> in
 *           the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to exceed the number of
 *           policies of a certain type that can be attached to an entity at one time.</p>
 *             </li>
 *             <li>
 *                <p>MAX_TAG_LIMIT_EXCEEDED: You have exceeded the number of tags allowed on this resource.
 *         </p>
 *             </li>
 *             <li>
 *                <p>MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To complete this operation with this
 *           member account, you first must associate a valid payment instrument, such as a credit
 *           card, with the account. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an
 *             organization when all required account information has not yet been provided</a> in
 *           the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to detach a policy from an
 *           entity, which would cause the entity to have fewer than the minimum number of policies of
 *           the required type.</p>
 *             </li>
 *             <li>
 *                <p>OU_DEPTH_LIMIT_EXCEEDED: You attempted to create an OU tree that is too many levels
 *           deep.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: You attempted to perform an operation that
 *           requires the organization to be configured to support all features. An organization that
 *           supports only consolidated billing features can't perform this operation.</p>
 *             </li>
 *             <li>
 *                <p>OU_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of OUs that you can have
 *           in an organization.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of policies that you
 *           can have in an organization.</p>
 *             </li>
 *             <li>
 *                <p>TAG_POLICY_VIOLATION: Tags associated with the resource must be compliant with the tag policy that’s in effect for the account. For more information,
 *           see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
 *           the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface ConstraintViolationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConstraintViolationException";
  $fault: "client";
  Message?: string;
  Reason?: ConstraintViolationExceptionReason | string;
}

export namespace ConstraintViolationException {
  export const filterSensitiveLog = (
    obj: ConstraintViolationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConstraintViolationException =>
    __isa(o, "ConstraintViolationException");
}

export enum ConstraintViolationExceptionReason {
  ACCOUNT_CANNOT_LEAVE_ORGANIZATION = "ACCOUNT_CANNOT_LEAVE_ORGANIZATION",
  ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA = "ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA",
  ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION = "ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION",
  ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED = "ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED",
  ACCOUNT_NUMBER_LIMIT_EXCEEDED = "ACCOUNT_NUMBER_LIMIT_EXCEEDED",
  CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION = "CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION",
  EMAIL_VERIFICATION_CODE_EXPIRED = "EMAIL_VERIFICATION_CODE_EXPIRED",
  HANDSHAKE_RATE_LIMIT_EXCEEDED = "HANDSHAKE_RATE_LIMIT_EXCEEDED",
  MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE = "MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE",
  MASTER_ACCOUNT_MISSING_CONTACT_INFO = "MASTER_ACCOUNT_MISSING_CONTACT_INFO",
  MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED = "MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED",
  MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED = "MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED",
  MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED = "MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED",
  MAX_TAG_LIMIT_EXCEEDED = "MAX_TAG_LIMIT_EXCEEDED",
  MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED = "MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED",
  MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED = "MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED",
  ORGANIZATION_NOT_IN_ALL_FEATURES_MODE = "ORGANIZATION_NOT_IN_ALL_FEATURES_MODE",
  OU_DEPTH_LIMIT_EXCEEDED = "OU_DEPTH_LIMIT_EXCEEDED",
  OU_NUMBER_LIMIT_EXCEEDED = "OU_NUMBER_LIMIT_EXCEEDED",
  POLICY_CONTENT_LIMIT_EXCEEDED = "POLICY_CONTENT_LIMIT_EXCEEDED",
  POLICY_NUMBER_LIMIT_EXCEEDED = "POLICY_NUMBER_LIMIT_EXCEEDED",
  TAG_POLICY_VIOLATION = "TAG_POLICY_VIOLATION",
  WAIT_PERIOD_ACTIVE = "WAIT_PERIOD_ACTIVE"
}

export enum CreateAccountFailureReason {
  ACCOUNT_LIMIT_EXCEEDED = "ACCOUNT_LIMIT_EXCEEDED",
  CONCURRENT_ACCOUNT_MODIFICATION = "CONCURRENT_ACCOUNT_MODIFICATION",
  EMAIL_ALREADY_EXISTS = "EMAIL_ALREADY_EXISTS",
  GOVCLOUD_ACCOUNT_ALREADY_EXISTS = "GOVCLOUD_ACCOUNT_ALREADY_EXISTS",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  INVALID_ADDRESS = "INVALID_ADDRESS",
  INVALID_EMAIL = "INVALID_EMAIL"
}

export interface CreateAccountRequest {
  __type?: "CreateAccountRequest";
  /**
   * <p>The friendly name of the member account.</p>
   */
  AccountName: string | undefined;

  /**
   * <p>The email address of the owner to assign to the new member account. This email address
   *       must not already be associated with another AWS account. You must use a valid email address
   *       to complete account creation. You can't access the root user of the account or remove an
   *       account that was created with an invalid email address.</p>
   */
  Email: string | undefined;

  /**
   * <p>If set to <code>ALLOW</code>, the new account enables IAM users to access account
   *       billing information <i>if</i> they have the required permissions. If set to
   *         <code>DENY</code>, only the root user of the new account can access account billing
   *       information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to
   *         the Billing and Cost Management Console</a> in the
   *       <i>AWS Billing and Cost Management User Guide</i>.</p>
   *          <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>. This value
   *       allows IAM users and roles with the required permissions to access billing information for
   *       the new account.</p>
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | string;

  /**
   * <p>(Optional)</p>
   *          <p>The name of an IAM role that AWS Organizations automatically preconfigures in the new member
   *       account. This role trusts the master account, allowing users in the master account to assume
   *       the role, as permitted by the master account administrator. The role has administrator
   *       permissions in the new member account.</p>
   *          <p>If you don't specify this parameter, the role name defaults to
   *         <code>OrganizationAccountAccessRole</code>.</p>
   *          <p>For more information about how to use this role to access the member account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Accessing and Administering the Member Accounts in Your Organization</a> in the
   *         <i>AWS Organizations User Guide</i>. Also see steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">Tutorial: Delegate Access Across
   *         AWS Accounts Using IAM Roles</a> in the <i>IAM User Guide.</i>
   *          </p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that
   *     is used to validate this parameter. The pattern can include uppercase
   *     letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>
   */
  RoleName?: string;
}

export namespace CreateAccountRequest {
  export const filterSensitiveLog = (obj: CreateAccountRequest): any => ({
    ...obj,
    ...(obj.AccountName && { AccountName: SENSITIVE_STRING }),
    ...(obj.Email && { Email: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateAccountRequest =>
    __isa(o, "CreateAccountRequest");
}

export interface CreateAccountResponse {
  __type?: "CreateAccountResponse";
  /**
   * <p>A structure that contains details about the request to create an account. This response
   *       structure might not be fully populated when you first receive it because account creation is
   *       an asynchronous process. You can pass the returned <code>CreateAccountStatus</code> ID as a
   *       parameter to <a>DescribeCreateAccountStatus</a> to get status about the progress of
   *       the request at later times. You can also check the AWS CloudTrail log for the
   *         <code>CreateAccountResult</code> event. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a>
   *       in the <i>AWS Organizations User Guide</i>.</p>
   */
  CreateAccountStatus?: CreateAccountStatus;
}

export namespace CreateAccountResponse {
  export const filterSensitiveLog = (obj: CreateAccountResponse): any => ({
    ...obj,
    ...(obj.CreateAccountStatus && {
      CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(
        obj.CreateAccountStatus
      )
    })
  });
  export const isa = (o: any): o is CreateAccountResponse =>
    __isa(o, "CreateAccountResponse");
}

export enum CreateAccountState {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud
 *       (US) account in an organization.</p>
 */
export interface CreateAccountStatus {
  __type?: "CreateAccountStatus";
  /**
   * <p>If the account was created successfully, the unique identifier (ID) of the new
   *       account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   */
  AccountId?: string;

  /**
   * <p>The account name given to the account when it was created.</p>
   */
  AccountName?: string;

  /**
   * <p>The date and time that the account was created and the request completed.</p>
   */
  CompletedTimestamp?: Date;

  /**
   * <p>If the request failed, a description of the reason for the failure.</p>
   *          <ul>
   *             <li>
   *                <p>ACCOUNT_LIMIT_EXCEEDED: The account could not be created because you have reached the
   *           limit on the number of accounts in your organization.</p>
   *             </li>
   *             <li>
   *                <p>EMAIL_ALREADY_EXISTS: The account could not be created because another AWS account
   *           with that email address already exists.</p>
   *             </li>
   *             <li>
   *                <p>GOVCLOUD_ACCOUNT_ALREADY_EXISTS: The account in the AWS GovCloud (US) Region could not
   *           be created because this Region already includes an account with that email address.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_ADDRESS: The account could not be created because the address you provided is
   *           not valid.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_EMAIL: The account could not be created because the email address you provided
   *           is not valid.</p>
   *             </li>
   *             <li>
   *                <p>INTERNAL_FAILURE: The account could not be created because of an internal failure. Try
   *           again later. If the problem persists, contact AWS Support.</p>
   *             </li>
   *          </ul>
   */
  FailureReason?: CreateAccountFailureReason | string;

  /**
   * <p>If the account was created successfully, the unique identifier (ID) of the new account in
   *       the AWS GovCloud (US) Region.</p>
   */
  GovCloudAccountId?: string;

  /**
   * <p>The unique identifier (ID) that references this request. You get this value from the
   *       response of the initial <a>CreateAccount</a> request to create the account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string
   *     requires "car-" followed by from 8 to 32 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the request was made for the account creation.</p>
   */
  RequestedTimestamp?: Date;

  /**
   * <p>The status of the request.</p>
   */
  State?: CreateAccountState | string;
}

export namespace CreateAccountStatus {
  export const filterSensitiveLog = (obj: CreateAccountStatus): any => ({
    ...obj,
    ...(obj.AccountName && { AccountName: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateAccountStatus =>
    __isa(o, "CreateAccountStatus");
}

/**
 * <p>We can't find a create account request with the <code>CreateAccountRequestId</code> that
 *       you specified.</p>
 */
export interface CreateAccountStatusNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "CreateAccountStatusNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace CreateAccountStatusNotFoundException {
  export const filterSensitiveLog = (
    obj: CreateAccountStatusNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAccountStatusNotFoundException =>
    __isa(o, "CreateAccountStatusNotFoundException");
}

export interface CreateGovCloudAccountRequest {
  __type?: "CreateGovCloudAccountRequest";
  /**
   * <p>The friendly name of the member account.</p>
   */
  AccountName: string | undefined;

  /**
   * <p>The email address of the owner to assign to the new member account in the commercial
   *       Region. This email address must not already be associated with another AWS account. You must
   *       use a valid email address to complete account creation. You can't access the root user of the
   *       account or remove an account that was created with an invalid email address. Like all request
   *       parameters for <code>CreateGovCloudAccount</code>, the request for the email address for the
   *       AWS GovCloud (US) account originates from the commercial Region. It does not come from the
   *       AWS GovCloud (US) Region.</p>
   */
  Email: string | undefined;

  /**
   * <p>If set to <code>ALLOW</code>, the new linked account in the commercial Region enables
   *       IAM users to access account billing information <i>if</i> they have the
   *       required permissions. If set to <code>DENY</code>, only the root user of the new account can
   *       access account billing information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to
   *         the Billing and Cost Management Console</a> in the
   *         <i>AWS Billing and Cost Management User Guide.</i>
   *          </p>
   *          <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>, and IAM
   *       users and roles with the required permissions can access billing information for the new
   *       account.</p>
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | string;

  /**
   * <p>(Optional)</p>
   *          <p>The name of an IAM role that AWS Organizations automatically preconfigures in the new member
   *       accounts in both the AWS GovCloud (US) Region and in the commercial Region. This role trusts
   *       the master account, allowing users in the master account to assume the role, as permitted by
   *       the master account administrator. The role has administrator permissions in the new member
   *       account.</p>
   *          <p>If you don't specify this parameter, the role name defaults to
   *         <code>OrganizationAccountAccessRole</code>.</p>
   *          <p>For more information about how to use this role to access the member account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Accessing and Administering the Member Accounts in Your Organization</a> in the
   *         <i>AWS Organizations User Guide</i>. See also steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">Tutorial: Delegate Access Across
   *         AWS Accounts Using IAM Roles</a> in the
   *       <i>IAM User Guide.</i>
   *          </p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that
   *     is used to validate this parameter. The pattern can include uppercase
   *     letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>
   */
  RoleName?: string;
}

export namespace CreateGovCloudAccountRequest {
  export const filterSensitiveLog = (
    obj: CreateGovCloudAccountRequest
  ): any => ({
    ...obj,
    ...(obj.AccountName && { AccountName: SENSITIVE_STRING }),
    ...(obj.Email && { Email: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateGovCloudAccountRequest =>
    __isa(o, "CreateGovCloudAccountRequest");
}

export interface CreateGovCloudAccountResponse {
  __type?: "CreateGovCloudAccountResponse";
  /**
   * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud
   *       (US) account in an organization.</p>
   */
  CreateAccountStatus?: CreateAccountStatus;
}

export namespace CreateGovCloudAccountResponse {
  export const filterSensitiveLog = (
    obj: CreateGovCloudAccountResponse
  ): any => ({
    ...obj,
    ...(obj.CreateAccountStatus && {
      CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(
        obj.CreateAccountStatus
      )
    })
  });
  export const isa = (o: any): o is CreateGovCloudAccountResponse =>
    __isa(o, "CreateGovCloudAccountResponse");
}

export interface CreateOrganizationalUnitRequest {
  __type?: "CreateOrganizationalUnitRequest";
  /**
   * <p>The friendly name to assign to the new OU.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier (ID) of the parent root or OU that you want to create the new OU
   *       in.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  ParentId: string | undefined;
}

export namespace CreateOrganizationalUnitRequest {
  export const filterSensitiveLog = (
    obj: CreateOrganizationalUnitRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOrganizationalUnitRequest =>
    __isa(o, "CreateOrganizationalUnitRequest");
}

export interface CreateOrganizationalUnitResponse {
  __type?: "CreateOrganizationalUnitResponse";
  /**
   * <p>A structure that contains details about the newly created OU.</p>
   */
  OrganizationalUnit?: OrganizationalUnit;
}

export namespace CreateOrganizationalUnitResponse {
  export const filterSensitiveLog = (
    obj: CreateOrganizationalUnitResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOrganizationalUnitResponse =>
    __isa(o, "CreateOrganizationalUnitResponse");
}

export interface CreateOrganizationRequest {
  __type?: "CreateOrganizationRequest";
  /**
   * <p>Specifies the feature set supported by the new organization. Each feature set supports
   *       different levels of functionality.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONSOLIDATED_BILLING</code>: All member accounts have their bills consolidated
   *           to and paid by the master account. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only">Consolidated
   *             billing</a> in the <i>AWS Organizations User Guide.</i>
   *                </p>
   *                <p> The consolidated billing feature subset isn't available for organizations in the
   *           AWS GovCloud (US) Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: In addition to all the features that consolidated billing feature
   *           set supports, the master account can also apply any policy type to any member account in
   *           the organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all">All
   *             features</a> in the <i>AWS Organizations User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  FeatureSet?: OrganizationFeatureSet | string;
}

export namespace CreateOrganizationRequest {
  export const filterSensitiveLog = (obj: CreateOrganizationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOrganizationRequest =>
    __isa(o, "CreateOrganizationRequest");
}

export interface CreateOrganizationResponse {
  __type?: "CreateOrganizationResponse";
  /**
   * <p>A structure that contains details about the newly created organization.</p>
   */
  Organization?: Organization;
}

export namespace CreateOrganizationResponse {
  export const filterSensitiveLog = (obj: CreateOrganizationResponse): any => ({
    ...obj,
    ...(obj.Organization && {
      Organization: Organization.filterSensitiveLog(obj.Organization)
    })
  });
  export const isa = (o: any): o is CreateOrganizationResponse =>
    __isa(o, "CreateOrganizationResponse");
}

export interface CreatePolicyRequest {
  __type?: "CreatePolicyRequest";
  /**
   * <p>The policy content to add to the new policy. For example, you could create a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">service control
   *         policy</a> (SCP) that specifies the permissions that administrators in attached accounts
   *       can delegate to their users, groups, and roles. The string for this SCP must be JSON text. For
   *       more information about the SCP syntax, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control
   *         Policy Syntax</a> in the <i>AWS Organizations User Guide.</i>
   *          </p>
   */
  Content: string | undefined;

  /**
   * <p>An optional description to assign to the policy.</p>
   */
  Description: string | undefined;

  /**
   * <p>The friendly name to assign to the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of policy to create.</p>
   */
  Type: PolicyType | string | undefined;
}

export namespace CreatePolicyRequest {
  export const filterSensitiveLog = (obj: CreatePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyRequest =>
    __isa(o, "CreatePolicyRequest");
}

export interface CreatePolicyResponse {
  __type?: "CreatePolicyResponse";
  /**
   * <p>A structure that contains details about the newly created policy.</p>
   */
  Policy?: Policy;
}

export namespace CreatePolicyResponse {
  export const filterSensitiveLog = (obj: CreatePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyResponse =>
    __isa(o, "CreatePolicyResponse");
}

export interface DeclineHandshakeRequest {
  __type?: "DeclineHandshakeRequest";
  /**
   * <p>The unique identifier (ID) of the handshake that you want to decline. You can get the ID
   *       from the <a>ListHandshakesForAccount</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   */
  HandshakeId: string | undefined;
}

export namespace DeclineHandshakeRequest {
  export const filterSensitiveLog = (obj: DeclineHandshakeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeclineHandshakeRequest =>
    __isa(o, "DeclineHandshakeRequest");
}

export interface DeclineHandshakeResponse {
  __type?: "DeclineHandshakeResponse";
  /**
   * <p>A structure that contains details about the declined handshake. The state is updated to
   *       show the value <code>DECLINED</code>.</p>
   */
  Handshake?: Handshake;
}

export namespace DeclineHandshakeResponse {
  export const filterSensitiveLog = (obj: DeclineHandshakeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeclineHandshakeResponse =>
    __isa(o, "DeclineHandshakeResponse");
}

export interface DeleteOrganizationalUnitRequest {
  __type?: "DeleteOrganizationalUnitRequest";
  /**
   * <p>The unique identifier (ID) of the organizational unit that you want to delete. You can get
   *       the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or
   *     digits.</p>
   */
  OrganizationalUnitId: string | undefined;
}

export namespace DeleteOrganizationalUnitRequest {
  export const filterSensitiveLog = (
    obj: DeleteOrganizationalUnitRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteOrganizationalUnitRequest =>
    __isa(o, "DeleteOrganizationalUnitRequest");
}

export interface DeletePolicyRequest {
  __type?: "DeletePolicyRequest";
  /**
   * <p>The unique identifier (ID) of the policy that you want to delete. You can get the ID from
   *       the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *       operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   */
  PolicyId: string | undefined;
}

export namespace DeletePolicyRequest {
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePolicyRequest =>
    __isa(o, "DeletePolicyRequest");
}

export interface DescribeAccountRequest {
  __type?: "DescribeAccountRequest";
  /**
   * <p>The unique identifier (ID) of the AWS account that you want information about. You can
   *       get the ID from the <a>ListAccounts</a> or <a>ListAccountsForParent</a>
   *       operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   */
  AccountId: string | undefined;
}

export namespace DescribeAccountRequest {
  export const filterSensitiveLog = (obj: DescribeAccountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountRequest =>
    __isa(o, "DescribeAccountRequest");
}

export interface DescribeAccountResponse {
  __type?: "DescribeAccountResponse";
  /**
   * <p>A structure that contains information about the requested account.</p>
   */
  Account?: Account;
}

export namespace DescribeAccountResponse {
  export const filterSensitiveLog = (obj: DescribeAccountResponse): any => ({
    ...obj,
    ...(obj.Account && { Account: Account.filterSensitiveLog(obj.Account) })
  });
  export const isa = (o: any): o is DescribeAccountResponse =>
    __isa(o, "DescribeAccountResponse");
}

export interface DescribeCreateAccountStatusRequest {
  __type?: "DescribeCreateAccountStatusRequest";
  /**
   * <p>Specifies the <code>operationId</code> that uniquely identifies the request. You can get
   *       the ID from the response to an earlier <a>CreateAccount</a> request, or from the
   *         <a>ListCreateAccountStatus</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string
   *     requires "car-" followed by from 8 to 32 lowercase letters or digits.</p>
   */
  CreateAccountRequestId: string | undefined;
}

export namespace DescribeCreateAccountStatusRequest {
  export const filterSensitiveLog = (
    obj: DescribeCreateAccountStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCreateAccountStatusRequest =>
    __isa(o, "DescribeCreateAccountStatusRequest");
}

export interface DescribeCreateAccountStatusResponse {
  __type?: "DescribeCreateAccountStatusResponse";
  /**
   * <p>A structure that contains the current status of an account creation request.</p>
   */
  CreateAccountStatus?: CreateAccountStatus;
}

export namespace DescribeCreateAccountStatusResponse {
  export const filterSensitiveLog = (
    obj: DescribeCreateAccountStatusResponse
  ): any => ({
    ...obj,
    ...(obj.CreateAccountStatus && {
      CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(
        obj.CreateAccountStatus
      )
    })
  });
  export const isa = (o: any): o is DescribeCreateAccountStatusResponse =>
    __isa(o, "DescribeCreateAccountStatusResponse");
}

export interface DescribeEffectivePolicyRequest {
  __type?: "DescribeEffectivePolicyRequest";
  /**
   * <p>The type of policy that you want information about.</p>
   */
  PolicyType: EffectivePolicyType | string | undefined;

  /**
   * <p>When you're signed in as the master account, specify the ID of the account that you want
   *       details about. Specifying an organization root or OU as the target is not supported. </p>
   */
  TargetId?: string;
}

export namespace DescribeEffectivePolicyRequest {
  export const filterSensitiveLog = (
    obj: DescribeEffectivePolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEffectivePolicyRequest =>
    __isa(o, "DescribeEffectivePolicyRequest");
}

export interface DescribeEffectivePolicyResponse {
  __type?: "DescribeEffectivePolicyResponse";
  /**
   * <p>The contents of the effective policy.</p>
   */
  EffectivePolicy?: EffectivePolicy;
}

export namespace DescribeEffectivePolicyResponse {
  export const filterSensitiveLog = (
    obj: DescribeEffectivePolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEffectivePolicyResponse =>
    __isa(o, "DescribeEffectivePolicyResponse");
}

export interface DescribeHandshakeRequest {
  __type?: "DescribeHandshakeRequest";
  /**
   * <p>The unique identifier (ID) of the handshake that you want information about. You can get
   *       the ID from the original call to <a>InviteAccountToOrganization</a>, or from a call
   *       to <a>ListHandshakesForAccount</a> or <a>ListHandshakesForOrganization</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   */
  HandshakeId: string | undefined;
}

export namespace DescribeHandshakeRequest {
  export const filterSensitiveLog = (obj: DescribeHandshakeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHandshakeRequest =>
    __isa(o, "DescribeHandshakeRequest");
}

export interface DescribeHandshakeResponse {
  __type?: "DescribeHandshakeResponse";
  /**
   * <p>A structure that contains information about the specified handshake.</p>
   */
  Handshake?: Handshake;
}

export namespace DescribeHandshakeResponse {
  export const filterSensitiveLog = (obj: DescribeHandshakeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHandshakeResponse =>
    __isa(o, "DescribeHandshakeResponse");
}

export interface DescribeOrganizationalUnitRequest {
  __type?: "DescribeOrganizationalUnitRequest";
  /**
   * <p>The unique identifier (ID) of the organizational unit that you want details about. You can
   *       get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or
   *     digits.</p>
   */
  OrganizationalUnitId: string | undefined;
}

export namespace DescribeOrganizationalUnitRequest {
  export const filterSensitiveLog = (
    obj: DescribeOrganizationalUnitRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOrganizationalUnitRequest =>
    __isa(o, "DescribeOrganizationalUnitRequest");
}

export interface DescribeOrganizationalUnitResponse {
  __type?: "DescribeOrganizationalUnitResponse";
  /**
   * <p>A structure that contains details about the specified OU.</p>
   */
  OrganizationalUnit?: OrganizationalUnit;
}

export namespace DescribeOrganizationalUnitResponse {
  export const filterSensitiveLog = (
    obj: DescribeOrganizationalUnitResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOrganizationalUnitResponse =>
    __isa(o, "DescribeOrganizationalUnitResponse");
}

export interface DescribeOrganizationResponse {
  __type?: "DescribeOrganizationResponse";
  /**
   * <p>A structure that contains information about the organization.</p>
   */
  Organization?: Organization;
}

export namespace DescribeOrganizationResponse {
  export const filterSensitiveLog = (
    obj: DescribeOrganizationResponse
  ): any => ({
    ...obj,
    ...(obj.Organization && {
      Organization: Organization.filterSensitiveLog(obj.Organization)
    })
  });
  export const isa = (o: any): o is DescribeOrganizationResponse =>
    __isa(o, "DescribeOrganizationResponse");
}

export interface DescribePolicyRequest {
  __type?: "DescribePolicyRequest";
  /**
   * <p>The unique identifier (ID) of the policy that you want details about. You can get the ID
   *       from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *       operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   */
  PolicyId: string | undefined;
}

export namespace DescribePolicyRequest {
  export const filterSensitiveLog = (obj: DescribePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePolicyRequest =>
    __isa(o, "DescribePolicyRequest");
}

export interface DescribePolicyResponse {
  __type?: "DescribePolicyResponse";
  /**
   * <p>A structure that contains details about the specified policy.</p>
   */
  Policy?: Policy;
}

export namespace DescribePolicyResponse {
  export const filterSensitiveLog = (obj: DescribePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePolicyResponse =>
    __isa(o, "DescribePolicyResponse");
}

/**
 * <p>We can't find the destination container (a root or OU) with the <code>ParentId</code> that
 *       you specified.</p>
 */
export interface DestinationParentNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "DestinationParentNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace DestinationParentNotFoundException {
  export const filterSensitiveLog = (
    obj: DestinationParentNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DestinationParentNotFoundException =>
    __isa(o, "DestinationParentNotFoundException");
}

export interface DetachPolicyRequest {
  __type?: "DetachPolicyRequest";
  /**
   * <p>The unique identifier (ID) of the policy you want to detach. You can get the ID from the
   *         <a>ListPolicies</a> or <a>ListPoliciesForTarget</a> operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root, OU, or account that you want to detach the policy
   *       from. You can get the ID from the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a>
   *       operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  TargetId: string | undefined;
}

export namespace DetachPolicyRequest {
  export const filterSensitiveLog = (obj: DetachPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachPolicyRequest =>
    __isa(o, "DetachPolicyRequest");
}

export interface DisableAWSServiceAccessRequest {
  __type?: "DisableAWSServiceAccessRequest";
  /**
   * <p>The service principal name of the AWS service for which you want to disable integration
   *       with your organization. This is typically in the form of a URL, such as
   *           <code>
   *                <i>service-abbreviation</i>.amazonaws.com</code>.</p>
   */
  ServicePrincipal: string | undefined;
}

export namespace DisableAWSServiceAccessRequest {
  export const filterSensitiveLog = (
    obj: DisableAWSServiceAccessRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableAWSServiceAccessRequest =>
    __isa(o, "DisableAWSServiceAccessRequest");
}

export interface DisablePolicyTypeRequest {
  __type?: "DisablePolicyTypeRequest";
  /**
   * <p>The policy type that you want to disable in this root.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>The unique identifier (ID) of the root in which you want to disable a policy type. You can
   *       get the ID from the <a>ListRoots</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   */
  RootId: string | undefined;
}

export namespace DisablePolicyTypeRequest {
  export const filterSensitiveLog = (obj: DisablePolicyTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisablePolicyTypeRequest =>
    __isa(o, "DisablePolicyTypeRequest");
}

export interface DisablePolicyTypeResponse {
  __type?: "DisablePolicyTypeResponse";
  /**
   * <p>A structure that shows the root with the updated list of enabled policy types.</p>
   */
  Root?: Root;
}

export namespace DisablePolicyTypeResponse {
  export const filterSensitiveLog = (obj: DisablePolicyTypeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisablePolicyTypeResponse =>
    __isa(o, "DisablePolicyTypeResponse");
}

/**
 * <p>That account is already present in the specified destination.</p>
 */
export interface DuplicateAccountException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateAccountException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateAccountException {
  export const filterSensitiveLog = (obj: DuplicateAccountException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateAccountException =>
    __isa(o, "DuplicateAccountException");
}

/**
 * <p>A handshake with the same action and target already exists. For example, if you invited an
 *       account to join your organization, the invited account might already have a pending invitation
 *       from this organization. If you intend to resend an invitation to an account, ensure that
 *       existing handshakes that might be considered duplicates are canceled or declined.</p>
 */
export interface DuplicateHandshakeException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateHandshakeException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateHandshakeException {
  export const filterSensitiveLog = (
    obj: DuplicateHandshakeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateHandshakeException =>
    __isa(o, "DuplicateHandshakeException");
}

/**
 * <p>An OU with the same name already exists.</p>
 */
export interface DuplicateOrganizationalUnitException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateOrganizationalUnitException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateOrganizationalUnitException {
  export const filterSensitiveLog = (
    obj: DuplicateOrganizationalUnitException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateOrganizationalUnitException =>
    __isa(o, "DuplicateOrganizationalUnitException");
}

/**
 * <p>The selected policy is already attached to the specified target.</p>
 */
export interface DuplicatePolicyAttachmentException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicatePolicyAttachmentException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicatePolicyAttachmentException {
  export const filterSensitiveLog = (
    obj: DuplicatePolicyAttachmentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicatePolicyAttachmentException =>
    __isa(o, "DuplicatePolicyAttachmentException");
}

/**
 * <p>A policy with the same name already exists.</p>
 */
export interface DuplicatePolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicatePolicyException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicatePolicyException {
  export const filterSensitiveLog = (obj: DuplicatePolicyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicatePolicyException =>
    __isa(o, "DuplicatePolicyException");
}

/**
 * <p>Contains rules to be applied to the affected accounts. The effective policy is the
 *       aggregation of any policies the account inherits, plus any policy directly attached to the
 *       account.</p>
 */
export interface EffectivePolicy {
  __type?: "EffectivePolicy";
  /**
   * <p>The time of the last update to this policy.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>The text content of the policy.</p>
   */
  PolicyContent?: string;

  /**
   * <p>The policy type.</p>
   */
  PolicyType?: EffectivePolicyType | string;

  /**
   * <p>The account ID of the policy target. </p>
   */
  TargetId?: string;
}

export namespace EffectivePolicy {
  export const filterSensitiveLog = (obj: EffectivePolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is EffectivePolicy =>
    __isa(o, "EffectivePolicy");
}

/**
 * <p>If you ran this action on the master account, this policy type is not enabled. If you ran
 *       the action on a member account, the account doesn't have an effective policy of this type.
 *       Contact the administrator of your organization about attaching a policy of this type to the
 *       account. </p>
 */
export interface EffectivePolicyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "EffectivePolicyNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EffectivePolicyNotFoundException {
  export const filterSensitiveLog = (
    obj: EffectivePolicyNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EffectivePolicyNotFoundException =>
    __isa(o, "EffectivePolicyNotFoundException");
}

export enum EffectivePolicyType {
  TAG_POLICY = "TAG_POLICY"
}

export interface EnableAllFeaturesRequest {
  __type?: "EnableAllFeaturesRequest";
}

export namespace EnableAllFeaturesRequest {
  export const filterSensitiveLog = (obj: EnableAllFeaturesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableAllFeaturesRequest =>
    __isa(o, "EnableAllFeaturesRequest");
}

export interface EnableAllFeaturesResponse {
  __type?: "EnableAllFeaturesResponse";
  /**
   * <p>A structure that contains details about the handshake created to support this request to
   *       enable all features in the organization.</p>
   */
  Handshake?: Handshake;
}

export namespace EnableAllFeaturesResponse {
  export const filterSensitiveLog = (obj: EnableAllFeaturesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableAllFeaturesResponse =>
    __isa(o, "EnableAllFeaturesResponse");
}

export interface EnableAWSServiceAccessRequest {
  __type?: "EnableAWSServiceAccessRequest";
  /**
   * <p>The service principal name of the AWS service for which you want to enable integration
   *       with your organization. This is typically in the form of a URL, such as
   *           <code>
   *                <i>service-abbreviation</i>.amazonaws.com</code>.</p>
   */
  ServicePrincipal: string | undefined;
}

export namespace EnableAWSServiceAccessRequest {
  export const filterSensitiveLog = (
    obj: EnableAWSServiceAccessRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableAWSServiceAccessRequest =>
    __isa(o, "EnableAWSServiceAccessRequest");
}

/**
 * <p>A structure that contains details of a service principal that is enabled to integrate with
 *       AWS Organizations.</p>
 */
export interface EnabledServicePrincipal {
  __type?: "EnabledServicePrincipal";
  /**
   * <p>The date that the service principal was enabled for integration with AWS Organizations.</p>
   */
  DateEnabled?: Date;

  /**
   * <p>The name of the service principal. This is typically in the form of a URL, such as:
   *           <code>
   *                <i>servicename</i>.amazonaws.com</code>.</p>
   */
  ServicePrincipal?: string;
}

export namespace EnabledServicePrincipal {
  export const filterSensitiveLog = (obj: EnabledServicePrincipal): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnabledServicePrincipal =>
    __isa(o, "EnabledServicePrincipal");
}

export interface EnablePolicyTypeRequest {
  __type?: "EnablePolicyTypeRequest";
  /**
   * <p>The policy type that you want to enable.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>The unique identifier (ID) of the root in which you want to enable a policy type. You can
   *       get the ID from the <a>ListRoots</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   */
  RootId: string | undefined;
}

export namespace EnablePolicyTypeRequest {
  export const filterSensitiveLog = (obj: EnablePolicyTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnablePolicyTypeRequest =>
    __isa(o, "EnablePolicyTypeRequest");
}

export interface EnablePolicyTypeResponse {
  __type?: "EnablePolicyTypeResponse";
  /**
   * <p>A structure that shows the root with the updated list of enabled policy types.</p>
   */
  Root?: Root;
}

export namespace EnablePolicyTypeResponse {
  export const filterSensitiveLog = (obj: EnablePolicyTypeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnablePolicyTypeResponse =>
    __isa(o, "EnablePolicyTypeResponse");
}

/**
 * <p>AWS Organizations couldn't perform the operation because your organization hasn't finished
 *       initializing. This can take up to an hour. Try again later. If after one hour you continue to
 *       receive this error, contact <a href="https://console.aws.amazon.com/support/home#/">AWS
 *       Support</a>.</p>
 */
export interface FinalizingOrganizationException
  extends __SmithyException,
    $MetadataBearer {
  name: "FinalizingOrganizationException";
  $fault: "client";
  Message?: string;
}

export namespace FinalizingOrganizationException {
  export const filterSensitiveLog = (
    obj: FinalizingOrganizationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FinalizingOrganizationException =>
    __isa(o, "FinalizingOrganizationException");
}

/**
 * <p>Contains information that must be exchanged to securely establish a relationship between
 *       two accounts (an <i>originator</i> and a <i>recipient</i>). For
 *       example, assume that a master account (the originator) invites another account (the recipient)
 *       to join its organization. In that case, the two accounts exchange information as a series of
 *       handshake requests and responses.</p>
 *          <p>
 *             <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED
 *       show up in lists for only 30 days after entering that state. After that, they are
 *       deleted.</p>
 */
export interface Handshake {
  __type?: "Handshake";
  /**
   * <p>The type of handshake, indicating what action occurs when the recipient accepts the
   *       handshake. The following handshake types are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INVITE</b>: This type of handshake represents a request
   *           to join an organization. It is always sent from the master account to only non-member
   *           accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ENABLE_ALL_FEATURES</b>: This type of handshake
   *           represents a request to enable all features in an organization. It is always sent from the
   *           master account to only <i>invited</i> member accounts. Created accounts do
   *           not receive this because those accounts were created by the organization's master account
   *           and approval is inferred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>APPROVE_ALL_FEATURES</b>: This type of handshake is sent
   *           from the Organizations service when all member accounts have approved the
   *             <code>ENABLE_ALL_FEATURES</code> invitation. It is sent only to the master account and
   *           signals the master that it can finalize the process to enable all features.</p>
   *             </li>
   *          </ul>
   */
  Action?: ActionType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of a handshake.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the handshake expires. If the recipient of the handshake request
   *       fails to respond before the specified date and time, the handshake becomes inactive and is no
   *       longer valid.</p>
   */
  ExpirationTimestamp?: Date;

  /**
   * <p>The unique identifier (ID) of a handshake. The originating account creates the ID when it
   *       initiates the handshake.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>Information about the two accounts that are participating in the handshake.</p>
   */
  Parties?: HandshakeParty[];

  /**
   * <p>The date and time that the handshake request was made.</p>
   */
  RequestedTimestamp?: Date;

  /**
   * <p>Additional information that is needed to process the handshake.</p>
   */
  Resources?: HandshakeResource[];

  /**
   * <p>The current state of the handshake. Use the state to trace the flow of the handshake
   *       through the process from its creation to its acceptance. The meaning of each of the valid
   *       values is as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>REQUESTED</b>: This handshake was sent to multiple
   *           recipients (applicable to only some handshake types) and not all recipients have responded
   *           yet. The request stays in this state until all recipients respond.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OPEN</b>: This handshake was sent to multiple recipients
   *           (applicable to only some policy types) and all recipients have responded, allowing the
   *           originator to complete the handshake action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED</b>: This handshake is no longer active because
   *           it was canceled by the originating account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACCEPTED</b>: This handshake is complete because it has
   *           been accepted by the recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DECLINED</b>: This handshake is no longer active because
   *           it was declined by the recipient account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED</b>: This handshake is no longer active because
   *           the originator did not receive a response of any kind from the recipient before the
   *           expiration time (15 days).</p>
   *             </li>
   *          </ul>
   */
  State?: HandshakeState | string;
}

export namespace Handshake {
  export const filterSensitiveLog = (obj: Handshake): any => ({
    ...obj,
    ...(obj.Parties && {
      Parties: obj.Parties.map(item => HandshakeParty.filterSensitiveLog(item))
    }),
    ...(obj.Resources && {
      Resources: obj.Resources.map(item =>
        HandshakeResource.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is Handshake => __isa(o, "Handshake");
}

/**
 * <p>The specified handshake is already in the requested state. For example, you can't accept a
 *       handshake that was already accepted.</p>
 */
export interface HandshakeAlreadyInStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "HandshakeAlreadyInStateException";
  $fault: "client";
  Message?: string;
}

export namespace HandshakeAlreadyInStateException {
  export const filterSensitiveLog = (
    obj: HandshakeAlreadyInStateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HandshakeAlreadyInStateException =>
    __isa(o, "HandshakeAlreadyInStateException");
}

/**
 * <p>The requested operation would violate the constraint identified in the reason code.</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific API
 *         or operation:</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number of
 *           accounts in an organization. Note that deleted and closed accounts still count toward your
 *           limit.</p>
 *                <important>
 *                   <p>If you get this exception immediately after creating the organization, wait one hour
 *             and try again. If after an hour it continues to fail with this error, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>ALREADY_IN_AN_ORGANIZATION: The handshake request is invalid because the invited
 *           account is already a member of an organization.</p>
 *             </li>
 *             <li>
 *                <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of handshakes that
 *           you can send in one day.</p>
 *             </li>
 *             <li>
 *                <p>INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES: You can't issue new invitations to join an
 *           organization while it's in the process of enabling all features. You can resume inviting
 *           accounts after you finalize the process when all accounts have agreed to the
 *           change.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_ALREADY_HAS_ALL_FEATURES: The handshake request is invalid because the
 *           organization has already enabled all features.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD: The request failed because the account
 *           is from a different marketplace than the accounts in the organization. For example,
 *           accounts with India addresses must be associated with the AISPL marketplace. All accounts
 *           in an organization must be from the same marketplace.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED: You attempted to change the
 *           membership of an account too quickly after its previous change.</p>
 *             </li>
 *             <li>
 *                <p>PAYMENT_INSTRUMENT_REQUIRED: You can't complete the operation with an account that
 *           doesn't have a payment instrument, such as a credit card, associated with it.</p>
 *             </li>
 *          </ul>
 */
export interface HandshakeConstraintViolationException
  extends __SmithyException,
    $MetadataBearer {
  name: "HandshakeConstraintViolationException";
  $fault: "client";
  Message?: string;
  Reason?: HandshakeConstraintViolationExceptionReason | string;
}

export namespace HandshakeConstraintViolationException {
  export const filterSensitiveLog = (
    obj: HandshakeConstraintViolationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HandshakeConstraintViolationException =>
    __isa(o, "HandshakeConstraintViolationException");
}

export enum HandshakeConstraintViolationExceptionReason {
  ACCOUNT_NUMBER_LIMIT_EXCEEDED = "ACCOUNT_NUMBER_LIMIT_EXCEEDED",
  ALREADY_IN_AN_ORGANIZATION = "ALREADY_IN_AN_ORGANIZATION",
  HANDSHAKE_RATE_LIMIT_EXCEEDED = "HANDSHAKE_RATE_LIMIT_EXCEEDED",
  INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES = "INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES",
  ORGANIZATION_ALREADY_HAS_ALL_FEATURES = "ORGANIZATION_ALREADY_HAS_ALL_FEATURES",
  ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD = "ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD",
  ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED = "ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED",
  PAYMENT_INSTRUMENT_REQUIRED = "PAYMENT_INSTRUMENT_REQUIRED"
}

/**
 * <p>Specifies the criteria that are used to select the handshakes for the operation.</p>
 */
export interface HandshakeFilter {
  __type?: "HandshakeFilter";
  /**
   * <p>Specifies the type of handshake action.</p>
   *          <p>If you specify <code>ActionType</code>, you cannot also specify
   *         <code>ParentHandshakeId</code>.</p>
   */
  ActionType?: ActionType | string;

  /**
   * <p>Specifies the parent handshake. Only used for handshake types that are a child of another
   *       type.</p>
   *          <p>If you specify <code>ParentHandshakeId</code>, you cannot also specify
   *         <code>ActionType</code>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lower-case letters or digits.</p>
   */
  ParentHandshakeId?: string;
}

export namespace HandshakeFilter {
  export const filterSensitiveLog = (obj: HandshakeFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is HandshakeFilter =>
    __isa(o, "HandshakeFilter");
}

/**
 * <p>We can't find a handshake with the <code>HandshakeId</code> that you specified.</p>
 */
export interface HandshakeNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "HandshakeNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace HandshakeNotFoundException {
  export const filterSensitiveLog = (obj: HandshakeNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is HandshakeNotFoundException =>
    __isa(o, "HandshakeNotFoundException");
}

/**
 * <p>Identifies a participant in a handshake.</p>
 */
export interface HandshakeParty {
  __type?: "HandshakeParty";
  /**
   * <p>The unique identifier (ID) for the party.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lower-case letters or digits.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of party.</p>
   */
  Type: HandshakePartyType | string | undefined;
}

export namespace HandshakeParty {
  export const filterSensitiveLog = (obj: HandshakeParty): any => ({
    ...obj,
    ...(obj.Id && { Id: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is HandshakeParty =>
    __isa(o, "HandshakeParty");
}

export enum HandshakePartyType {
  ACCOUNT = "ACCOUNT",
  EMAIL = "EMAIL",
  ORGANIZATION = "ORGANIZATION"
}

/**
 * <p>Contains additional data that is needed to process a handshake.</p>
 */
export interface HandshakeResource {
  __type?: "HandshakeResource";
  /**
   * <p>When needed, contains an additional array of <code>HandshakeResource</code>
   *       objects.</p>
   */
  Resources?: HandshakeResource[];

  /**
   * <p>The type of information being passed, specifying how the value is to be interpreted by the
   *       other party:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT</code> - Specifies an AWS account ID number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ORGANIZATION</code> - Specifies an organization ID number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL</code> - Specifies the email address that is associated with the account
   *           that receives the handshake. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OWNER_EMAIL</code> - Specifies the email address associated with the master
   *           account. Included as information about an organization. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OWNER_NAME</code> - Specifies the name associated with the master account.
   *           Included as information about an organization. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTES</code> - Additional text provided by the handshake initiator and intended
   *           for the recipient to read.</p>
   *             </li>
   *          </ul>
   */
  Type?: HandshakeResourceType | string;

  /**
   * <p>The information that is passed to the other party in the handshake. The format of the
   *       value string must match the requirements of the specified type.</p>
   */
  Value?: string;
}

export namespace HandshakeResource {
  export const filterSensitiveLog = (obj: HandshakeResource): any => ({
    ...obj,
    ...(obj.Resources && {
      Resources: obj.Resources.map(item =>
        HandshakeResource.filterSensitiveLog(item)
      )
    }),
    ...(obj.Value && { Value: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is HandshakeResource =>
    __isa(o, "HandshakeResource");
}

export enum HandshakeResourceType {
  ACCOUNT = "ACCOUNT",
  EMAIL = "EMAIL",
  MASTER_EMAIL = "MASTER_EMAIL",
  MASTER_NAME = "MASTER_NAME",
  NOTES = "NOTES",
  ORGANIZATION = "ORGANIZATION",
  ORGANIZATION_FEATURE_SET = "ORGANIZATION_FEATURE_SET",
  PARENT_HANDSHAKE = "PARENT_HANDSHAKE"
}

export enum HandshakeState {
  ACCEPTED = "ACCEPTED",
  CANCELED = "CANCELED",
  DECLINED = "DECLINED",
  EXPIRED = "EXPIRED",
  OPEN = "OPEN",
  REQUESTED = "REQUESTED"
}

export enum IAMUserAccessToBilling {
  ALLOW = "ALLOW",
  DENY = "DENY"
}

/**
 * <p>You can't perform the operation on the handshake in its current state. For example, you
 *       can't cancel a handshake that was already accepted or accept a handshake that was already
 *       declined.</p>
 */
export interface InvalidHandshakeTransitionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidHandshakeTransitionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidHandshakeTransitionException {
  export const filterSensitiveLog = (
    obj: InvalidHandshakeTransitionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidHandshakeTransitionException =>
    __isa(o, "InvalidHandshakeTransitionException");
}

/**
 * <p>The requested operation failed because you provided invalid values for one or more of the
 *       request parameters. This exception includes a reason that contains additional information
 *       about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific API
 *         or operation:</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>IMMUTABLE_POLICY: You specified a policy that is managed by AWS and can't be
 *           modified.</p>
 *             </li>
 *             <li>
 *                <p>INPUT_REQUIRED: You must include a value for all required parameters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM: You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM_POLICY_TYPE: You specified an invalid policy type.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid
 *           characters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least one
 *           invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAGINATION_TOKEN: Get the value for the <code>NextToken</code> parameter from
 *           the response to a previous call of the operation.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account,
 *           organization, or email) as a party.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN: You provided a value that doesn't match the required pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match the
 *           required pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name can't begin
 *           with the reserved prefix <code>AWSServiceRoleFor</code>.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name (ARN)
 *           for the organization.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag. You can’t
 *           add, edit, or delete system tag keys because they're reserved for AWS use. System tags
 *           don’t count against your tags per resource limit.</p>
 *             </li>
 *             <li>
 *                <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than
 *           allowed.</p>
 *             </li>
 *             <li>
 *                <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value than
 *           allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than
 *           allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value than
 *           allowed.</p>
 *             </li>
 *             <li>
 *                <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between entities
 *           in the same root.</p>
 *             </li>
 *          </ul>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
  Reason?: InvalidInputExceptionReason | string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInputException =>
    __isa(o, "InvalidInputException");
}

export enum InvalidInputExceptionReason {
  IMMUTABLE_POLICY = "IMMUTABLE_POLICY",
  INPUT_REQUIRED = "INPUT_REQUIRED",
  INVALID_ENUM = "INVALID_ENUM",
  INVALID_ENUM_POLICY_TYPE = "INVALID_ENUM_POLICY_TYPE",
  INVALID_FULL_NAME_TARGET = "INVALID_FULL_NAME_TARGET",
  INVALID_LIST_MEMBER = "INVALID_LIST_MEMBER",
  INVALID_PAGINATION_TOKEN = "INVALID_NEXT_TOKEN",
  INVALID_PARTY_TYPE_TARGET = "INVALID_PARTY_TYPE_TARGET",
  INVALID_PATTERN = "INVALID_PATTERN",
  INVALID_PATTERN_TARGET_ID = "INVALID_PATTERN_TARGET_ID",
  INVALID_ROLE_NAME = "INVALID_ROLE_NAME",
  INVALID_SYNTAX_ORGANIZATION = "INVALID_SYNTAX_ORGANIZATION_ARN",
  INVALID_SYNTAX_POLICY = "INVALID_SYNTAX_POLICY_ID",
  INVALID_SYSTEM_TAGS_PARAMETER = "INVALID_SYSTEM_TAGS_PARAMETER",
  MAX_FILTER_LIMIT_EXCEEDED = "MAX_LIMIT_EXCEEDED_FILTER",
  MAX_LENGTH_EXCEEDED = "MAX_LENGTH_EXCEEDED",
  MAX_VALUE_EXCEEDED = "MAX_VALUE_EXCEEDED",
  MIN_LENGTH_EXCEEDED = "MIN_LENGTH_EXCEEDED",
  MIN_VALUE_EXCEEDED = "MIN_VALUE_EXCEEDED",
  MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS = "MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS",
  TARGET_NOT_SUPPORTED = "TARGET_NOT_SUPPORTED",
  UNRECOGNIZED_SERVICE_PRINCIPAL = "UNRECOGNIZED_SERVICE_PRINCIPAL"
}

export interface InviteAccountToOrganizationRequest {
  __type?: "InviteAccountToOrganizationRequest";
  /**
   * <p>Additional information that you want to include in the generated email to the recipient
   *       account owner.</p>
   */
  Notes?: string;

  /**
   * <p>The identifier (ID) of the AWS account that you want to invite to join your
   *       organization. This is a JSON object that contains the following elements: </p>
   *          <p>
   *             <code>{ "Type": "ACCOUNT", "Id": "<<i>
   *                   <b>account id
   *             number</b>
   *                </i>>" }</code>
   *          </p>
   *          <p>If you use the AWS CLI, you can submit this as a single string, similar to the following
   *       example:</p>
   *          <p>
   *             <code>--target Id=123456789012,Type=ACCOUNT</code>
   *          </p>
   *          <p>If you specify <code>"Type": "ACCOUNT"</code>, you must provide the AWS account ID
   *       number as the <code>Id</code>. If you specify <code>"Type": "EMAIL"</code>, you must specify
   *       the email address that is associated with the account.</p>
   *          <p>
   *             <code>--target Id=diego@example.com,Type=EMAIL</code>
   *          </p>
   */
  Target: HandshakeParty | undefined;
}

export namespace InviteAccountToOrganizationRequest {
  export const filterSensitiveLog = (
    obj: InviteAccountToOrganizationRequest
  ): any => ({
    ...obj,
    ...(obj.Notes && { Notes: SENSITIVE_STRING }),
    ...(obj.Target && { Target: HandshakeParty.filterSensitiveLog(obj.Target) })
  });
  export const isa = (o: any): o is InviteAccountToOrganizationRequest =>
    __isa(o, "InviteAccountToOrganizationRequest");
}

export interface InviteAccountToOrganizationResponse {
  __type?: "InviteAccountToOrganizationResponse";
  /**
   * <p>A structure that contains details about the handshake that is created to support this
   *       invitation request.</p>
   */
  Handshake?: Handshake;
}

export namespace InviteAccountToOrganizationResponse {
  export const filterSensitiveLog = (
    obj: InviteAccountToOrganizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InviteAccountToOrganizationResponse =>
    __isa(o, "InviteAccountToOrganizationResponse");
}

export interface ListAccountsForParentRequest {
  __type?: "ListAccountsForParentRequest";
  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier (ID) for the parent root or organization unit (OU) whose accounts
   *       you want to list.</p>
   */
  ParentId: string | undefined;
}

export namespace ListAccountsForParentRequest {
  export const filterSensitiveLog = (
    obj: ListAccountsForParentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccountsForParentRequest =>
    __isa(o, "ListAccountsForParentRequest");
}

export interface ListAccountsForParentResponse {
  __type?: "ListAccountsForParentResponse";
  /**
   * <p>A list of the accounts in the specified root or OU.</p>
   */
  Accounts?: Account[];

  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListAccountsForParentResponse {
  export const filterSensitiveLog = (
    obj: ListAccountsForParentResponse
  ): any => ({
    ...obj,
    ...(obj.Accounts && {
      Accounts: obj.Accounts.map(item => Account.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is ListAccountsForParentResponse =>
    __isa(o, "ListAccountsForParentResponse");
}

export interface ListAccountsRequest {
  __type?: "ListAccountsRequest";
  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;
}

export namespace ListAccountsRequest {
  export const filterSensitiveLog = (obj: ListAccountsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAccountsRequest =>
    __isa(o, "ListAccountsRequest");
}

export interface ListAccountsResponse {
  __type?: "ListAccountsResponse";
  /**
   * <p>A list of objects in the organization.</p>
   */
  Accounts?: Account[];

  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListAccountsResponse {
  export const filterSensitiveLog = (obj: ListAccountsResponse): any => ({
    ...obj,
    ...(obj.Accounts && {
      Accounts: obj.Accounts.map(item => Account.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is ListAccountsResponse =>
    __isa(o, "ListAccountsResponse");
}

export interface ListAWSServiceAccessForOrganizationRequest {
  __type?: "ListAWSServiceAccessForOrganizationRequest";
  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;
}

export namespace ListAWSServiceAccessForOrganizationRequest {
  export const filterSensitiveLog = (
    obj: ListAWSServiceAccessForOrganizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListAWSServiceAccessForOrganizationRequest =>
    __isa(o, "ListAWSServiceAccessForOrganizationRequest");
}

export interface ListAWSServiceAccessForOrganizationResponse {
  __type?: "ListAWSServiceAccessForOrganizationResponse";
  /**
   * <p>A list of the service principals for the services that are enabled to integrate with your
   *       organization. Each principal is a structure that includes the name and the date that it was
   *       enabled for integration with AWS Organizations.</p>
   */
  EnabledServicePrincipals?: EnabledServicePrincipal[];

  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListAWSServiceAccessForOrganizationResponse {
  export const filterSensitiveLog = (
    obj: ListAWSServiceAccessForOrganizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListAWSServiceAccessForOrganizationResponse =>
    __isa(o, "ListAWSServiceAccessForOrganizationResponse");
}

export interface ListChildrenRequest {
  __type?: "ListChildrenRequest";
  /**
   * <p>Filters the output to include only the specified child type.</p>
   */
  ChildType: ChildType | string | undefined;

  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier (ID) for the parent root or OU whose children you want to
   *       list.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  ParentId: string | undefined;
}

export namespace ListChildrenRequest {
  export const filterSensitiveLog = (obj: ListChildrenRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListChildrenRequest =>
    __isa(o, "ListChildrenRequest");
}

export interface ListChildrenResponse {
  __type?: "ListChildrenResponse";
  /**
   * <p>The list of children of the specified parent container.</p>
   */
  Children?: Child[];

  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListChildrenResponse {
  export const filterSensitiveLog = (obj: ListChildrenResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListChildrenResponse =>
    __isa(o, "ListChildrenResponse");
}

export interface ListCreateAccountStatusRequest {
  __type?: "ListCreateAccountStatusRequest";
  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of one or more states that you want included in the response. If this parameter
   *       isn't present, all requests are included in the response.</p>
   */
  States?: (CreateAccountState | string)[];
}

export namespace ListCreateAccountStatusRequest {
  export const filterSensitiveLog = (
    obj: ListCreateAccountStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCreateAccountStatusRequest =>
    __isa(o, "ListCreateAccountStatusRequest");
}

export interface ListCreateAccountStatusResponse {
  __type?: "ListCreateAccountStatusResponse";
  /**
   * <p>A list of objects with details about the requests. Certain elements, such as the accountId
   *       number, are present in the output only after the account has been successfully created.</p>
   */
  CreateAccountStatuses?: CreateAccountStatus[];

  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListCreateAccountStatusResponse {
  export const filterSensitiveLog = (
    obj: ListCreateAccountStatusResponse
  ): any => ({
    ...obj,
    ...(obj.CreateAccountStatuses && {
      CreateAccountStatuses: obj.CreateAccountStatuses.map(item =>
        CreateAccountStatus.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is ListCreateAccountStatusResponse =>
    __isa(o, "ListCreateAccountStatusResponse");
}

export interface ListHandshakesForAccountRequest {
  __type?: "ListHandshakesForAccountRequest";
  /**
   * <p>Filters the handshakes that you want included in the response. The default is all types.
   *       Use the <code>ActionType</code> element to limit the output to only a specified type, such as
   *         <code>INVITE</code>, <code>ENABLE_ALL_FEATURES</code>, or <code>APPROVE_ALL_FEATURES</code>.
   *       Alternatively, you can specify  the <code>ENABLE_ALL_FEATURES</code> handshake, which
   *       generates a separate child handshake for each member account. When you do specify
   *         <code>ParentHandshakeId</code> to see only the handshakes that were generated by that parent
   *       request.</p>
   */
  Filter?: HandshakeFilter;

  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;
}

export namespace ListHandshakesForAccountRequest {
  export const filterSensitiveLog = (
    obj: ListHandshakesForAccountRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHandshakesForAccountRequest =>
    __isa(o, "ListHandshakesForAccountRequest");
}

export interface ListHandshakesForAccountResponse {
  __type?: "ListHandshakesForAccountResponse";
  /**
   * <p>A list of <a>Handshake</a> objects with details about each of the handshakes
   *       that is associated with the specified account.</p>
   */
  Handshakes?: Handshake[];

  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListHandshakesForAccountResponse {
  export const filterSensitiveLog = (
    obj: ListHandshakesForAccountResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHandshakesForAccountResponse =>
    __isa(o, "ListHandshakesForAccountResponse");
}

export interface ListHandshakesForOrganizationRequest {
  __type?: "ListHandshakesForOrganizationRequest";
  /**
   * <p>A filter of the handshakes that you want included in the response. The default is all
   *       types. Use the <code>ActionType</code> element to limit the output to only a specified type,
   *       such as <code>INVITE</code>, <code>ENABLE-ALL-FEATURES</code>, or
   *         <code>APPROVE-ALL-FEATURES</code>. Alternatively, you can specify the
   *         <code>ENABLE-ALL-FEATURES</code> handshake, which generates a separate child handshake for
   *       each member account. When you do, specify the <code>ParentHandshakeId</code> to see only the
   *       handshakes that were generated by that parent request.</p>
   */
  Filter?: HandshakeFilter;

  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;
}

export namespace ListHandshakesForOrganizationRequest {
  export const filterSensitiveLog = (
    obj: ListHandshakesForOrganizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHandshakesForOrganizationRequest =>
    __isa(o, "ListHandshakesForOrganizationRequest");
}

export interface ListHandshakesForOrganizationResponse {
  __type?: "ListHandshakesForOrganizationResponse";
  /**
   * <p>A list of <a>Handshake</a> objects with details about each of the handshakes
   *       that are associated with an organization.</p>
   */
  Handshakes?: Handshake[];

  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListHandshakesForOrganizationResponse {
  export const filterSensitiveLog = (
    obj: ListHandshakesForOrganizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHandshakesForOrganizationResponse =>
    __isa(o, "ListHandshakesForOrganizationResponse");
}

export interface ListOrganizationalUnitsForParentRequest {
  __type?: "ListOrganizationalUnitsForParentRequest";
  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier (ID) of the root or OU whose child OUs you want to list.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  ParentId: string | undefined;
}

export namespace ListOrganizationalUnitsForParentRequest {
  export const filterSensitiveLog = (
    obj: ListOrganizationalUnitsForParentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOrganizationalUnitsForParentRequest =>
    __isa(o, "ListOrganizationalUnitsForParentRequest");
}

export interface ListOrganizationalUnitsForParentResponse {
  __type?: "ListOrganizationalUnitsForParentResponse";
  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the OUs in the specified root or parent OU.</p>
   */
  OrganizationalUnits?: OrganizationalUnit[];
}

export namespace ListOrganizationalUnitsForParentResponse {
  export const filterSensitiveLog = (
    obj: ListOrganizationalUnitsForParentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOrganizationalUnitsForParentResponse =>
    __isa(o, "ListOrganizationalUnitsForParentResponse");
}

export interface ListParentsRequest {
  __type?: "ListParentsRequest";
  /**
   * <p>The unique identifier (ID) of the OU or account whose parent containers you want to list.
   *       Don't specify a root.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  ChildId: string | undefined;

  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;
}

export namespace ListParentsRequest {
  export const filterSensitiveLog = (obj: ListParentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListParentsRequest =>
    __isa(o, "ListParentsRequest");
}

export interface ListParentsResponse {
  __type?: "ListParentsResponse";
  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of parents for the specified child account or OU.</p>
   */
  Parents?: Parent[];
}

export namespace ListParentsResponse {
  export const filterSensitiveLog = (obj: ListParentsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListParentsResponse =>
    __isa(o, "ListParentsResponse");
}

export interface ListPoliciesForTargetRequest {
  __type?: "ListPoliciesForTargetRequest";
  /**
   * <p>The type of policy that you want to include in the returned list.</p>
   */
  Filter: PolicyType | string | undefined;

  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier (ID) of the root, organizational unit, or account whose policies you
   *       want to list.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  TargetId: string | undefined;
}

export namespace ListPoliciesForTargetRequest {
  export const filterSensitiveLog = (
    obj: ListPoliciesForTargetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesForTargetRequest =>
    __isa(o, "ListPoliciesForTargetRequest");
}

export interface ListPoliciesForTargetResponse {
  __type?: "ListPoliciesForTargetResponse";
  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of policies that match the criteria in the request.</p>
   */
  Policies?: PolicySummary[];
}

export namespace ListPoliciesForTargetResponse {
  export const filterSensitiveLog = (
    obj: ListPoliciesForTargetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesForTargetResponse =>
    __isa(o, "ListPoliciesForTargetResponse");
}

export interface ListPoliciesRequest {
  __type?: "ListPoliciesRequest";
  /**
   * <p>Specifies the type of policy that you want to include in the response.</p>
   */
  Filter: PolicyType | string | undefined;

  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;
}

export namespace ListPoliciesRequest {
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesRequest =>
    __isa(o, "ListPoliciesRequest");
}

export interface ListPoliciesResponse {
  __type?: "ListPoliciesResponse";
  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of policies that match the filter criteria in the request. The output list doesn't
   *       include the policy contents. To see the content for a policy, see <a>DescribePolicy</a>.</p>
   */
  Policies?: PolicySummary[];
}

export namespace ListPoliciesResponse {
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesResponse =>
    __isa(o, "ListPoliciesResponse");
}

export interface ListRootsRequest {
  __type?: "ListRootsRequest";
  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;
}

export namespace ListRootsRequest {
  export const filterSensitiveLog = (obj: ListRootsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRootsRequest =>
    __isa(o, "ListRootsRequest");
}

export interface ListRootsResponse {
  __type?: "ListRootsResponse";
  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of roots that are defined in an organization.</p>
   */
  Roots?: Root[];
}

export namespace ListRootsResponse {
  export const filterSensitiveLog = (obj: ListRootsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRootsResponse =>
    __isa(o, "ListRootsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the resource that you want to retrieve tags for. </p>
   */
  ResourceId: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags that are assigned to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface ListTargetsForPolicyRequest {
  __type?: "ListTargetsForPolicyRequest";
  /**
   * <p>(Optional) Use this to limit the number of results you want included
   *     per page in the response. If you do not include this parameter, it defaults to a value that is specific
   *     to the operation. If additional items exist beyond the maximum you specify, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results. Note that Organizations might return fewer results than the maximum even
   *     when there are more results available. You should check <code>NextToken</code> after every
   *     operation to ensure that you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code>
   *     response in a previous request that indicates that there is more output available. Set it to the
   *     value of the previous call's <code>NextToken</code> response to indicate where the output should
   *     continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier (ID) of the policy whose attachments you want to know.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   */
  PolicyId: string | undefined;
}

export namespace ListTargetsForPolicyRequest {
  export const filterSensitiveLog = (
    obj: ListTargetsForPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsForPolicyRequest =>
    __isa(o, "ListTargetsForPolicyRequest");
}

export interface ListTargetsForPolicyResponse {
  __type?: "ListTargetsForPolicyResponse";
  /**
   * <p>If present, this value indicates that there is more output
   *     available than is included in the current response. Use this value in the <code>NextToken</code>
   *     request parameter in a subsequent call to the operation to get the next part of the output. You
   *     should repeat this until the <code>NextToken</code> response element comes back as
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of structures, each of which contains details about one of the entities to which
   *       the specified policy is attached.</p>
   */
  Targets?: PolicyTargetSummary[];
}

export namespace ListTargetsForPolicyResponse {
  export const filterSensitiveLog = (
    obj: ListTargetsForPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsForPolicyResponse =>
    __isa(o, "ListTargetsForPolicyResponse");
}

/**
 * <p>The provided policy document doesn't meet the requirements of the specified policy type.
 *       For example, the syntax might be incorrect. For details about service control policy syntax,
 *       see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service
 *         Control Policy Syntax</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 */
export interface MalformedPolicyDocumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedPolicyDocumentException";
  $fault: "client";
  Message?: string;
}

export namespace MalformedPolicyDocumentException {
  export const filterSensitiveLog = (
    obj: MalformedPolicyDocumentException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MalformedPolicyDocumentException =>
    __isa(o, "MalformedPolicyDocumentException");
}

/**
 * <p>You can't remove a master account from an organization. If you want the master account to
 *       become a member account in another organization, you must first delete the current
 *       organization of the master account.</p>
 */
export interface MasterCannotLeaveOrganizationException
  extends __SmithyException,
    $MetadataBearer {
  name: "MasterCannotLeaveOrganizationException";
  $fault: "client";
  Message?: string;
}

export namespace MasterCannotLeaveOrganizationException {
  export const filterSensitiveLog = (
    obj: MasterCannotLeaveOrganizationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MasterCannotLeaveOrganizationException =>
    __isa(o, "MasterCannotLeaveOrganizationException");
}

export interface MoveAccountRequest {
  __type?: "MoveAccountRequest";
  /**
   * <p>The unique identifier (ID) of the account that you want to move.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root or organizational unit that you want to move the
   *       account to.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  DestinationParentId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root or organizational unit that you want to move the
   *       account from.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Root</b> - A string that begins with "r-" followed by from 4 to 32 lowercase letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with "ou-" followed by from 4 to 32
   *           lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   */
  SourceParentId: string | undefined;
}

export namespace MoveAccountRequest {
  export const filterSensitiveLog = (obj: MoveAccountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is MoveAccountRequest =>
    __isa(o, "MoveAccountRequest");
}

/**
 * <p>Contains details about an organization. An organization is a collection of accounts that
 *       are centrally managed together using consolidated billing, organized hierarchically with
 *       organizational units (OUs), and controlled with policies.</p>
 */
export interface Organization {
  __type?: "Organization";
  /**
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>A list of policy types that are enabled for this organization. For example, if your
   *       organization has all features enabled, then service control policies (SCPs) are included in
   *       the list.</p>
   *          <note>
   *             <p>Even if a policy type is shown as available in the organization, you can separately
   *         enable and disable them at the root level by using <a>EnablePolicyType</a> and
   *           <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of
   *         a policy type in that root.</p>
   *          </note>
   */
  AvailablePolicyTypes?: PolicyTypeSummary[];

  /**
   * <p>Specifies the functionality that currently is available to the organization. If set to
   *       "ALL", then all features are enabled and policies can be applied to accounts in the
   *       organization. If set to "CONSOLIDATED_BILLING", then only consolidated billing functionality
   *       is available. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your
   *         Organization</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  FeatureSet?: OrganizationFeatureSet | string;

  /**
   * <p>The unique identifier (ID) of an organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organization ID string requires "o-"
   *     followed by from 10 to 32 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account that is designated as the master account for
   *       the organization.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  MasterAccountArn?: string;

  /**
   * <p>The email address that is associated with the AWS account that is designated as the
   *       master account for the organization.</p>
   */
  MasterAccountEmail?: string;

  /**
   * <p>The unique identifier (ID) of the master account of an organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   */
  MasterAccountId?: string;
}

export namespace Organization {
  export const filterSensitiveLog = (obj: Organization): any => ({
    ...obj,
    ...(obj.MasterAccountEmail && { MasterAccountEmail: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is Organization => __isa(o, "Organization");
}

/**
 * <p>Contains details about an organizational unit (OU). An OU is a container of AWS accounts
 *       within a root of an organization. Policies that are attached to an OU apply to all accounts
 *       contained in that OU and in any child OUs.</p>
 */
export interface OrganizationalUnit {
  __type?: "OrganizationalUnit";
  /**
   * <p>The Amazon Resource Name (ARN) of this OU.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The unique identifier (ID) associated with this OU.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lower-case letters or
   *     digits.</p>
   */
  Id?: string;

  /**
   * <p>The friendly name of this OU.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name?: string;
}

export namespace OrganizationalUnit {
  export const filterSensitiveLog = (obj: OrganizationalUnit): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrganizationalUnit =>
    __isa(o, "OrganizationalUnit");
}

/**
 * <p>The specified OU is not empty. Move all accounts to another root or to other OUs, remove
 *       all child OUs, and try the operation again.</p>
 */
export interface OrganizationalUnitNotEmptyException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationalUnitNotEmptyException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationalUnitNotEmptyException {
  export const filterSensitiveLog = (
    obj: OrganizationalUnitNotEmptyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrganizationalUnitNotEmptyException =>
    __isa(o, "OrganizationalUnitNotEmptyException");
}

/**
 * <p>We can't find an OU with the <code>OrganizationalUnitId</code> that you specified.</p>
 */
export interface OrganizationalUnitNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationalUnitNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationalUnitNotFoundException {
  export const filterSensitiveLog = (
    obj: OrganizationalUnitNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrganizationalUnitNotFoundException =>
    __isa(o, "OrganizationalUnitNotFoundException");
}

export enum OrganizationFeatureSet {
  ALL = "ALL",
  CONSOLIDATED_BILLING = "CONSOLIDATED_BILLING"
}

/**
 * <p>The organization isn't empty. To delete an organization, you must first remove all
 *       accounts except the master account, delete all OUs, and delete all policies.</p>
 */
export interface OrganizationNotEmptyException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationNotEmptyException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationNotEmptyException {
  export const filterSensitiveLog = (
    obj: OrganizationNotEmptyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrganizationNotEmptyException =>
    __isa(o, "OrganizationNotEmptyException");
}

/**
 * <p>Contains information about either a root or an organizational unit (OU) that can contain
 *       OUs or accounts in an organization.</p>
 */
export interface Parent {
  __type?: "Parent";
  /**
   * <p>The unique identifier (ID) of the parent entity.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a parent ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>Root: A string that begins with "r-" followed by from 4 to 32 lower-case letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit (OU): A string that begins with "ou-" followed by from 4 to 32
   *           lower-case letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lower-case letters or digits.</p>
   *             </li>
   *          </ul>
   */
  Id?: string;

  /**
   * <p>The type of the parent entity.</p>
   */
  Type?: ParentType | string;
}

export namespace Parent {
  export const filterSensitiveLog = (obj: Parent): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parent => __isa(o, "Parent");
}

/**
 * <p>We can't find a root or OU with the <code>ParentId</code> that you specified.</p>
 */
export interface ParentNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ParentNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ParentNotFoundException {
  export const filterSensitiveLog = (obj: ParentNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParentNotFoundException =>
    __isa(o, "ParentNotFoundException");
}

export enum ParentType {
  ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT",
  ROOT = "ROOT"
}

/**
 * <p>Contains rules to be applied to the affected accounts. Policies can be attached directly
 *       to accounts, or to roots and OUs to affect all accounts in those hierarchies.</p>
 */
export interface Policy {
  __type?: "Policy";
  /**
   * <p>The text content of the policy.</p>
   */
  Content?: string;

  /**
   * <p>A structure that contains additional details about the policy.</p>
   */
  PolicySummary?: PolicySummary;
}

export namespace Policy {
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj
  });
  export const isa = (o: any): o is Policy => __isa(o, "Policy");
}

/**
 * <p>Changes to the effective policy are in progress, and its contents can't be returned. Try
 *       the operation again later. </p>
 */
export interface PolicyChangesInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyChangesInProgressException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyChangesInProgressException {
  export const filterSensitiveLog = (
    obj: PolicyChangesInProgressException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyChangesInProgressException =>
    __isa(o, "PolicyChangesInProgressException");
}

/**
 * <p>The policy is attached to one or more entities. You must detach it from all roots, OUs,
 *       and accounts before performing this operation.</p>
 */
export interface PolicyInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyInUseException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyInUseException {
  export const filterSensitiveLog = (obj: PolicyInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyInUseException =>
    __isa(o, "PolicyInUseException");
}

/**
 * <p>The policy isn't attached to the specified target in the specified root.</p>
 */
export interface PolicyNotAttachedException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyNotAttachedException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyNotAttachedException {
  export const filterSensitiveLog = (obj: PolicyNotAttachedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyNotAttachedException =>
    __isa(o, "PolicyNotAttachedException");
}

/**
 * <p>We can't find a policy with the <code>PolicyId</code> that you specified.</p>
 */
export interface PolicyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyNotFoundException {
  export const filterSensitiveLog = (obj: PolicyNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyNotFoundException =>
    __isa(o, "PolicyNotFoundException");
}

/**
 * <p>Contains information about a policy, but does not include the content. To see the content
 *       of a policy, see <a>DescribePolicy</a>.</p>
 */
export interface PolicySummary {
  __type?: "PolicySummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>A Boolean value that indicates whether the specified policy is an AWS managed policy. If
   *       true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit
   *       it.</p>
   */
  AwsManaged?: boolean;

  /**
   * <p>The description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier (ID) of the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The friendly name of the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name?: string;

  /**
   * <p>The type of policy.</p>
   */
  Type?: PolicyType | string;
}

export namespace PolicySummary {
  export const filterSensitiveLog = (obj: PolicySummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicySummary => __isa(o, "PolicySummary");
}

/**
 * <p>Contains information about a root, OU, or account that a policy is attached to.</p>
 */
export interface PolicyTargetSummary {
  __type?: "PolicyTargetSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the policy target.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The friendly name of the policy target.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier (ID) of the policy target.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a target ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>Root: A string that begins with "r-" followed by from 4 to 32 lower-case letters or
   *           digits.</p>
   *             </li>
   *             <li>
   *                <p>Account: A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit (OU): A string that begins with "ou-" followed by from 4 to 32
   *           lower-case letters or digits (the ID of the root that the OU is in). This string is followed by a second
   *           "-" dash and from 8 to 32 additional lower-case letters or digits.</p>
   *             </li>
   *          </ul>
   */
  TargetId?: string;

  /**
   * <p>The type of the policy target.</p>
   */
  Type?: TargetType | string;
}

export namespace PolicyTargetSummary {
  export const filterSensitiveLog = (obj: PolicyTargetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyTargetSummary =>
    __isa(o, "PolicyTargetSummary");
}

export enum PolicyType {
  SERVICE_CONTROL_POLICY = "SERVICE_CONTROL_POLICY",
  TAG_POLICY = "TAG_POLICY"
}

/**
 * <p>The specified policy type is already enabled in the specified root.</p>
 */
export interface PolicyTypeAlreadyEnabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyTypeAlreadyEnabledException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyTypeAlreadyEnabledException {
  export const filterSensitiveLog = (
    obj: PolicyTypeAlreadyEnabledException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyTypeAlreadyEnabledException =>
    __isa(o, "PolicyTypeAlreadyEnabledException");
}

/**
 * <p>You can't use the specified policy type with the feature set currently enabled for this
 *       organization. For example, you can enable SCPs only after you enable all features in the
 *       organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html#enable_policies_on_root">Enabling and Disabling
 *         a Policy Type on a Root</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 */
export interface PolicyTypeNotAvailableForOrganizationException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyTypeNotAvailableForOrganizationException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyTypeNotAvailableForOrganizationException {
  export const filterSensitiveLog = (
    obj: PolicyTypeNotAvailableForOrganizationException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PolicyTypeNotAvailableForOrganizationException =>
    __isa(o, "PolicyTypeNotAvailableForOrganizationException");
}

/**
 * <p>The specified policy type isn't currently enabled in this root. You can't attach policies
 *       of the specified type to entities in a root until you enable that type in the root. For more
 *       information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your
 *         Organization</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 */
export interface PolicyTypeNotEnabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyTypeNotEnabledException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyTypeNotEnabledException {
  export const filterSensitiveLog = (
    obj: PolicyTypeNotEnabledException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyTypeNotEnabledException =>
    __isa(o, "PolicyTypeNotEnabledException");
}

export enum PolicyTypeStatus {
  ENABLED = "ENABLED",
  PENDING_DISABLE = "PENDING_DISABLE",
  PENDING_ENABLE = "PENDING_ENABLE"
}

/**
 * <p>Contains information about a policy type and its status in the associated root.</p>
 */
export interface PolicyTypeSummary {
  __type?: "PolicyTypeSummary";
  /**
   * <p>The status of the policy type as it relates to the associated root. You can attach a
   *       policy of the specified type to a root or to an OU or account in that root. To do so, the
   *       policy must be available in the organization and enabled for that root.</p>
   */
  Status?: PolicyTypeStatus | string;

  /**
   * <p>The name of the policy type.</p>
   */
  Type?: PolicyType | string;
}

export namespace PolicyTypeSummary {
  export const filterSensitiveLog = (obj: PolicyTypeSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyTypeSummary =>
    __isa(o, "PolicyTypeSummary");
}

export interface RemoveAccountFromOrganizationRequest {
  __type?: "RemoveAccountFromOrganizationRequest";
  /**
   * <p>The unique identifier (ID) of the member account that you want to remove from the
   *       organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   */
  AccountId: string | undefined;
}

export namespace RemoveAccountFromOrganizationRequest {
  export const filterSensitiveLog = (
    obj: RemoveAccountFromOrganizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveAccountFromOrganizationRequest =>
    __isa(o, "RemoveAccountFromOrganizationRequest");
}

/**
 * <p>Contains details about a root. A root is a top-level parent node in the hierarchy of an
 *       organization that can contain organizational units (OUs) and accounts. Every root contains
 *       every AWS account in the organization. Each root enables the accounts to be organized in a
 *       different way and to have different policy types enabled for use in that root.</p>
 */
export interface Root {
  __type?: "Root";
  /**
   * <p>The Amazon Resource Name (ARN) of the root.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by
   *     Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The unique identifier (ID) for the root.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The friendly name of the root.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name?: string;

  /**
   * <p>The types of policies that are currently enabled for the root and therefore can be
   *       attached to the root or to its OUs or accounts.</p>
   *          <note>
   *             <p>Even if a policy type is shown as available in the organization, you can separately
   *         enable and disable them at the root level by using <a>EnablePolicyType</a> and
   *           <a>DisablePolicyType</a>. Use <a>DescribeOrganization</a> to see the
   *         availability of the policy types in that organization.</p>
   *          </note>
   */
  PolicyTypes?: PolicyTypeSummary[];
}

export namespace Root {
  export const filterSensitiveLog = (obj: Root): any => ({
    ...obj
  });
  export const isa = (o: any): o is Root => __isa(o, "Root");
}

/**
 * <p>We can't find a root with the <code>RootId</code> that you specified.</p>
 */
export interface RootNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "RootNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace RootNotFoundException {
  export const filterSensitiveLog = (obj: RootNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is RootNotFoundException =>
    __isa(o, "RootNotFoundException");
}

/**
 * <p>AWS Organizations can't complete your request because of an internal service error. Try again
 *       later.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceException {
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceException =>
    __isa(o, "ServiceException");
}

/**
 * <p>We can't find a source root or OU with the <code>ParentId</code> that you
 *       specified.</p>
 */
export interface SourceParentNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "SourceParentNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace SourceParentNotFoundException {
  export const filterSensitiveLog = (
    obj: SourceParentNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceParentNotFoundException =>
    __isa(o, "SourceParentNotFoundException");
}

/**
 * <p>A custom key-value pair associated with a resource such as an account within your
 *       organization. </p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key identifier, or name, of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The string value that's associated with the key of the tag. You can set the value of a tag
   *       to an empty string, but you can't set the value of a tag to null.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ID of the resource to add a tag to.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag to add to the specified resource. Specifying the tag key is required. You can set
   *       the value of a tag to an empty string, but you can't set the value of a tag to null.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

/**
 * <p>We can't find a root, OU, or account with the <code>TargetId</code> that you
 *       specified.</p>
 */
export interface TargetNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "TargetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace TargetNotFoundException {
  export const filterSensitiveLog = (obj: TargetNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetNotFoundException =>
    __isa(o, "TargetNotFoundException");
}

export enum TargetType {
  ACCOUNT = "ACCOUNT",
  ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT",
  ROOT = "ROOT"
}

/**
 * <p>You have sent too many requests in too short a period of time. The limit helps protect
 *       against denial-of-service attacks. Try again later.</p>
 *          <p>For information on limits that affect AWS Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Limits of AWS Organizations</a> in the
 *         <i>AWS Organizations User Guide.</i>
 *          </p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
  Type?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
}

/**
 * <p>This action isn't available in the current Region.</p>
 */
export interface UnsupportedAPIEndpointException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedAPIEndpointException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedAPIEndpointException {
  export const filterSensitiveLog = (
    obj: UnsupportedAPIEndpointException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedAPIEndpointException =>
    __isa(o, "UnsupportedAPIEndpointException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ID of the resource to remove the tag from.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag to remove from the specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UpdateOrganizationalUnitRequest {
  __type?: "UpdateOrganizationalUnitRequest";
  /**
   * <p>The new name that you want to assign to the OU.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier (ID) of the OU that you want to rename. You can get the ID from the
   *         <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or
   *     digits.</p>
   */
  OrganizationalUnitId: string | undefined;
}

export namespace UpdateOrganizationalUnitRequest {
  export const filterSensitiveLog = (
    obj: UpdateOrganizationalUnitRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateOrganizationalUnitRequest =>
    __isa(o, "UpdateOrganizationalUnitRequest");
}

export interface UpdateOrganizationalUnitResponse {
  __type?: "UpdateOrganizationalUnitResponse";
  /**
   * <p>A structure that contains the details about the specified OU, including its new
   *       name.</p>
   */
  OrganizationalUnit?: OrganizationalUnit;
}

export namespace UpdateOrganizationalUnitResponse {
  export const filterSensitiveLog = (
    obj: UpdateOrganizationalUnitResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateOrganizationalUnitResponse =>
    __isa(o, "UpdateOrganizationalUnitResponse");
}

export interface UpdatePolicyRequest {
  __type?: "UpdatePolicyRequest";
  /**
   * <p>If provided, the new content for the policy. The text must be correctly formatted JSON
   *       that complies with the syntax for the policy's type. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_scp-syntax.html">Service Control
   *         Policy Syntax</a> in the <i>AWS Organizations User Guide.</i>
   *          </p>
   */
  Content?: string;

  /**
   * <p>If provided, the new description for the policy.</p>
   */
  Description?: string;

  /**
   * <p>If provided, the new name for the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier (ID) of the policy that you want to update.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   */
  PolicyId: string | undefined;
}

export namespace UpdatePolicyRequest {
  export const filterSensitiveLog = (obj: UpdatePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePolicyRequest =>
    __isa(o, "UpdatePolicyRequest");
}

export interface UpdatePolicyResponse {
  __type?: "UpdatePolicyResponse";
  /**
   * <p>A structure that contains details about the updated policy, showing the requested
   *       changes.</p>
   */
  Policy?: Policy;
}

export namespace UpdatePolicyResponse {
  export const filterSensitiveLog = (obj: UpdatePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePolicyResponse =>
    __isa(o, "UpdatePolicyResponse");
}
