// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  AccessDeniedForDependencyExceptionReason,
  ConstraintViolationExceptionReason,
  HandshakeConstraintViolationExceptionReason,
  InvalidInputExceptionReason,
} from "./enums";
import { OrganizationsServiceException as __BaseException } from "./OrganizationsServiceException";

/**
 * <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The operation that you attempted requires you to have the
 *                 <code>iam:CreateServiceLinkedRole</code> for
 *                 <code>organizations.amazonaws.com</code> permission so that Organizations can create the
 *             required service-linked role. You don't have that permission.</p>
 * @public
 */
export class AccessDeniedForDependencyException extends __BaseException {
  readonly name = "AccessDeniedForDependencyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Reason?: AccessDeniedForDependencyExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedForDependencyException, __BaseException>) {
    super({
      name: "AccessDeniedForDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedForDependencyException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>Your account isn't a member of an organization. To make this request, you must use the
 *             credentials of an account that belongs to an organization.</p>
 * @public
 */
export class AWSOrganizationsNotInUseException extends __BaseException {
  readonly name = "AWSOrganizationsNotInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AWSOrganizationsNotInUseException, __BaseException>) {
    super({
      name: "AWSOrganizationsNotInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AWSOrganizationsNotInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Performing this operation violates a minimum or maximum value limit. For example,
 *             attempting to remove the last service control policy (SCP) from an OU or root, inviting
 *             or creating too many accounts to the organization, or attaching too many policies to an
 *             account, OU, or root. This exception includes a reason that contains additional
 *             information about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_ORGANIZATION: You attempted to remove the management
 *                     account from the organization. You can't remove the management account. Instead,
 *                     after you remove all member accounts, delete the organization itself.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: You attempted to remove an
 *                     account from the organization that doesn't yet have enough information to exist
 *                     as a standalone account. This account requires you to first complete phone
 *                     verification. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#orgs_manage_accounts_remove-from-master">Removing a member account from your organization</a> in the
 *                         <i>Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     accounts that you can create in one day.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CREATION_NOT_COMPLETE: Your account setup isn't complete or your
 *                     account isn't fully active. You must complete the account setup before you
 *                     create an organization.</p>
 *             </li>
 *             <li>
 *                <p>ACTIVE_RESPONSIBILITY_TRANSFER_PROCESS: You cannot delete organization due to an ongoing responsibility transfer process. For example, a pending invitation or an in-progress transfer. To delete the organization, you must resolve the current transfer process.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number
 *                     of accounts in an organization. If you need more accounts, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a> to
 *                     request an increase in your limit. </p>
 *                <p>Or the number of invitations that you tried to send would cause you to exceed
 *                     the limit of accounts in your organization. Send fewer invitations or contact
 *                     Amazon Web Services Support to request an increase in the number of accounts.</p>
 *                <note>
 *                   <p>Deleted and closed accounts still count toward your limit.</p>
 *                </note>
 *                <important>
 *                   <p>If you get this exception when running a command immediately after
 *                         creating the organization, wait one hour and try again. After an hour, if
 *                         the command continues to fail with this error, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>ALL_FEATURES_MIGRATION_ORGANIZATION_SIZE_LIMIT_EXCEEDED: Your organization has
 *                     more than 5000 accounts, and you can only use the standard migration process for
 *                     organizations with less than 5000 accounts. Use the assisted migration process
 *                     to enable all features mode, or create a support case for assistance if you are
 *                     unable to use assisted migration.</p>
 *             </li>
 *             <li>
 *                <p>CANNOT_REGISTER_SUSPENDED_ACCOUNT_AS_DELEGATED_ADMINISTRATOR: You cannot
 *                     register a suspended account as a delegated administrator.</p>
 *             </li>
 *             <li>
 *                <p>CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR: You attempted to register
 *                     the management account of the organization as a delegated administrator for an
 *                     Amazon Web Services service integrated with Organizations. You can designate only a member account as a
 *                     delegated administrator.</p>
 *             </li>
 *             <li>
 *                <p>CANNOT_CLOSE_MANAGEMENT_ACCOUNT: You attempted to close the management
 *                     account. To close the management account for the organization, you must first
 *                     either remove or close all member accounts in the organization. Follow standard
 *                     account closure process using root credentials.​ </p>
 *             </li>
 *             <li>
 *                <p>CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG: You attempted to remove an
 *                     account that is registered as a delegated administrator for a service integrated
 *                     with your organization. To complete this operation, you must first deregister
 *                     this account as a delegated administrator. </p>
 *             </li>
 *             <li>
 *                <p>CLOSE_ACCOUNT_QUOTA_EXCEEDED: You have exceeded close account quota for the
 *                     past 30 days. </p>
 *             </li>
 *             <li>
 *                <p>CLOSE_ACCOUNT_REQUESTS_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     accounts that you can close at a time. ​ </p>
 *             </li>
 *             <li>
 *                <p>CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION: To create an
 *                     organization in the specified region, you must enable all features mode.</p>
 *             </li>
 *             <li>
 *                <p>DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE: You attempted to register an
 *                     Amazon Web Services account as a delegated administrator for an Amazon Web Services service that already has
 *                     a delegated administrator. To complete this operation, you must first deregister
 *                     any existing delegated administrators for this service.</p>
 *             </li>
 *             <li>
 *                <p>EMAIL_VERIFICATION_CODE_EXPIRED: The email verification code is only valid for
 *                     a limited period of time. You must resubmit the request and generate a new
 *                     verification code.</p>
 *             </li>
 *             <li>
 *                <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     handshakes that you can send in one day.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAYMENT_INSTRUMENT: You cannot remove an account because no supported
 *                     payment method is associated with the account. Amazon Web Services does not support cards
 *                     issued by financial institutions in Russia or Belarus. For more information, see
 *                         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-general.html">Managing your
 *                         Amazon Web Services payments</a>.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: To create an account in
 *                     this organization, you first must migrate the organization's management account
 *                     to the marketplace that corresponds to the management account's address. All
 *                     accounts in an organization must be associated with the same marketplace.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE: Applies only to the Amazon Web Services Regions in
 *                     China. To create an organization, the master must have a valid business license.
 *                     For more information, contact customer support.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_MISSING_CONTACT_INFO: To complete this operation, you must
 *                     first provide a valid contact address and phone number for the management
 *                     account. Then try the operation again.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED: To complete this operation, the
 *                     management account must have an associated account in the Amazon Web Services GovCloud
 *                     (US-West) Region. For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a>
 *                     in the
 *                     <i>Amazon Web Services GovCloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To create an organization with
 *                     this management account, you first must associate a valid payment instrument,
 *                     such as a credit card, with the account. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_account-before-remove.html">Considerations before removing an account from an organization</a> in
 *                     the <i>Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED: You attempted to
 *                     register more delegated administrators than allowed for the service principal.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to exceed the number
 *                     of policies of a certain type that can be attached to an entity at one
 *                     time.</p>
 *             </li>
 *             <li>
 *                <p>MAX_TAG_LIMIT_EXCEEDED: You have exceeded the number of tags allowed on this
 *                     resource. </p>
 *             </li>
 *             <li>
 *                <p>MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To complete this operation with
 *                     this member account, you first must associate a valid payment instrument, such
 *                     as a credit card, with the account. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_account-before-remove.html">Considerations before removing an account from an organization</a> in
 *                     the <i>Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to detach a policy
 *                     from an entity that would cause the entity to have fewer than the minimum number
 *                     of policies of a certain type required.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: You attempted to perform an operation
 *                     that requires the organization to be configured to support all features. An
 *                     organization that supports only consolidated billing features can't perform this
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>OU_DEPTH_LIMIT_EXCEEDED: You attempted to create an OU tree that is too many
 *                     levels deep.</p>
 *             </li>
 *             <li>
 *                <p>OU_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of OUs that you
 *                     can have in an organization.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_CONTENT_LIMIT_EXCEEDED: You attempted to create a policy that is larger
 *                     than the maximum size.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of policies
 *                     that you can have in an organization.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_TYPE_ENABLED_FOR_THIS_SERVICE: You attempted to disable service access
 *                     before you disabled the policy type (for example, SECURITYHUB_POLICY). To
 *                     complete this operation, you must first disable the policy type.</p>
 *             </li>
 *             <li>
 *                <p>RESPONSIBILITY_TRANSFER_MAX_INBOUND_QUOTA_VIOLATION: You have exceeded your inbound
 *                     transfers limit.</p>
 *             </li>
 *             <li>
 *                <p>RESPONSIBILITY_TRANSFER_MAX_LEVEL_VIOLATION: You have exceeded the maximum length of your
 *                     transfer chain.</p>
 *             </li>
 *             <li>
 *                <p>RESPONSIBILITY_TRANSFER_MAX_OUTBOUND_QUOTA_VIOLATION: You have exceeded your outbound
 *                     transfers limit.</p>
 *             </li>
 *             <li>
 *                <p>RESPONSIBILITY_TRANSFER_MAX_TRANSFERS_QUOTA_VIOLATION: You have exceeded the maximum
 *                     number of inbound transfers allowed in a transfer chain.</p>
 *             </li>
 *             <li>
 *                <p>SERVICE_ACCESS_NOT_ENABLED:</p>
 *                <ul>
 *                   <li>
 *                      <p>You attempted to register a delegated administrator before you enabled
 *                             service access. Call the <code>EnableAWSServiceAccess</code> API
 *                             first.</p>
 *                   </li>
 *                   <li>
 *                      <p>You attempted to enable a policy type before you enabled service
 *                             access. Call the <code>EnableAWSServiceAccess</code> API first.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>TAG_POLICY_VIOLATION: You attempted to create or update a resource with tags
 *                     that are not compliant with the tag policy requirements for this account.</p>
 *             </li>
 *             <li>
 *                <p>TRANSFER_RESPONSIBILITY_SOURCE_DELETION_IN_PROGRESS: The source organization cannot accept
 *                     this transfer invitation because it is marked for deletion.</p>
 *             </li>
 *             <li>
 *                <p>TRANSFER_RESPONSIBILITY_TARGET_DELETION_IN_PROGRESS: The source organization cannot accept
 *                     this transfer invitation because target organization is marked for deletion.</p>
 *             </li>
 *             <li>
 *                <p>UNSUPPORTED_PRICING: Your organization has a pricing contract that is unsupported.</p>
 *             </li>
 *             <li>
 *                <p>WAIT_PERIOD_ACTIVE: After you create an Amazon Web Services account, you must wait until at
 *                     least four days after the account was created. Invited accounts aren't subject
 *                     to this waiting period.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ConstraintViolationException extends __BaseException {
  readonly name = "ConstraintViolationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Reason?: ConstraintViolationExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConstraintViolationException, __BaseException>) {
    super({
      name: "ConstraintViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConstraintViolationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The specified handshake is already in the requested state. For example, you can't
 *             accept a handshake that was already accepted.</p>
 * @public
 */
export class HandshakeAlreadyInStateException extends __BaseException {
  readonly name = "HandshakeAlreadyInStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HandshakeAlreadyInStateException, __BaseException>) {
    super({
      name: "HandshakeAlreadyInStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HandshakeAlreadyInStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would violate the constraint identified in the reason
 *             code.</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation:</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number
 *                     of accounts in an organization. Note that deleted and closed accounts still
 *                     count toward your limit.</p>
 *                <important>
 *                   <p>If you get this exception immediately after creating the organization,
 *                         wait one hour and try again. If after an hour it continues to fail with this
 *                         error, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services
 *                             Support</a>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>ALREADY_IN_AN_ORGANIZATION: The handshake request is invalid because the
 *                     invited account is already a member of an organization.</p>
 *             </li>
 *             <li>
 *                <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     handshakes that you can send in one day.</p>
 *             </li>
 *             <li>
 *                <p>INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES: You can't issue new invitations to
 *                     join an organization while it's in the process of enabling all features. You can
 *                     resume inviting accounts after you finalize the process when all accounts have
 *                     agreed to the change.</p>
 *             </li>
 *             <li>
 *                <p>LEGACY_PERMISSIONS_STILL_IN_USE: Your organization must migrate to use the new IAM
 *                     fine-grained actions for billing, cost management, and accounts.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_ALREADY_HAS_ALL_FEATURES: The handshake request is invalid
 *                     because the organization has already enabled all features.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD: The request failed because the
 *                     account is from a different marketplace than the accounts in the
 *                     organization.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION: The handshake request
 *                     is invalid because the organization has already started the process to enable
 *                     all features.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED: You attempted to change
 *                     the membership of an account too quickly after its previous change.</p>
 *             </li>
 *             <li>
 *                <p>PAYMENT_INSTRUMENT_REQUIRED: You can't complete the operation with an account
 *                     that doesn't have a payment instrument, such as a credit card, associated with
 *                     it.</p>
 *             </li>
 *             <li>
 *                <p>RESPONSIBILITY_TRANSFER_ALREADY_EXISTS: You cannot perform this operation with the current
 *                     transfer.</p>
 *             </li>
 *             <li>
 *                <p>SOURCE_AND_TARGET_CANNOT_MATCH: An account can't accept a transfer invitation if it is both the sender and recipient of the invitation.</p>
 *             </li>
 *             <li>
 *                <p>UNUSED_PREPAYMENT_BALANCE: Your organization has an outstanding pre-payment balance.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class HandshakeConstraintViolationException extends __BaseException {
  readonly name = "HandshakeConstraintViolationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Reason?: HandshakeConstraintViolationExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HandshakeConstraintViolationException, __BaseException>) {
    super({
      name: "HandshakeConstraintViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HandshakeConstraintViolationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>We can't find a handshake with the <code>HandshakeId</code> that you specified.</p>
 * @public
 */
export class HandshakeNotFoundException extends __BaseException {
  readonly name = "HandshakeNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HandshakeNotFoundException, __BaseException>) {
    super({
      name: "HandshakeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HandshakeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't perform the operation on the handshake in its current state. For example,
 *             you can't cancel a handshake that was already accepted or accept a handshake that was
 *             already declined.</p>
 * @public
 */
export class InvalidHandshakeTransitionException extends __BaseException {
  readonly name = "InvalidHandshakeTransitionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHandshakeTransitionException, __BaseException>) {
    super({
      name: "InvalidHandshakeTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHandshakeTransitionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation failed because you provided invalid values for one or more of
 *             the request parameters. This exception includes a reason that contains additional
 *             information about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>CALLER_REQUIRED_FIELD_MISSING: At least one of the required field is missing: Caller Account Id, Management Account Id or Organization Id.</p>
 *             </li>
 *             <li>
 *                <p>DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>END_DATE_NOT_END_OF_MONTH: You provided an invalid end date. The end date must be the end
 *                     of the last day of the month (23.59.59.999).</p>
 *             </li>
 *             <li>
 *                <p>END_DATE_TOO_EARLY: You provided an invalid end date. It is too early for the transfer to
 *                     end.</p>
 *             </li>
 *             <li>
 *                <p>IMMUTABLE_POLICY: You specified a policy that is managed by Amazon Web Services and can't be
 *                     modified.</p>
 *             </li>
 *             <li>
 *                <p>INPUT_REQUIRED: You must include a value for all required parameters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_EMAIL_ADDRESS_TARGET: You specified an invalid email address for the
 *                     invited account owner.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_END_DATE: The selected withdrawal date doesn't meet the terms of your partner
 *                     agreement. Visit Amazon Web Services Partner Central to view your partner agreements or contact your Amazon Web Services
 *                     Partner for help.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM: You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM_POLICY_TYPE: You specified an invalid policy type string.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid
 *                     characters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least
 *                     one invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAGINATION_TOKEN: Get the value for the <code>NextToken</code>
 *                     parameter from the response to a previous call of the operation.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account,
 *                     organization, or email) as a party.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN: You provided a value that doesn't match the required
 *                     pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match
 *                     the required pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PRINCIPAL: You specified an invalid principal element in the
 *                     policy.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name
 *                     can't begin with the reserved prefix <code>AWSServiceRoleFor</code>.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_START_DATE: The start date doesn't meet the minimum requirements.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name
 *                     (ARN) for the organization.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag.
 *                     You can’t add, edit, or delete system tag keys because they're reserved for
 *                     Amazon Web Services use. System tags don’t count against your tags per resource limit.</p>
 *             </li>
 *             <li>
 *                <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between
 *                     entities in the same root.</p>
 *             </li>
 *             <li>
 *                <p>NON_DETACHABLE_POLICY: You can't detach this Amazon Web Services Managed Policy.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_NOT_BEGINNING_OF_DAY: You provided an invalid start date. The start date must
 *                     be the beginning of the day (00:00:00.000).</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_NOT_BEGINNING_OF_MONTH: You provided an invalid start date. The start date must
 *                     be the first day of the month.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_TOO_EARLY: You provided an invalid start date. The start date is too early.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_TOO_LATE: You provided an invalid start date. The start date is too late.</p>
 *             </li>
 *             <li>
 *                <p>TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't
 *                     recognized.</p>
 *             </li>
 *             <li>
 *                <p>UNSUPPORTED_ACTION_IN_RESPONSIBILITY_TRANSFER: You provided a value that is not supported
 *                 by this operation.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Reason?: InvalidInputExceptionReason | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>You can't remove a management account from an organization. If you want the management
 *             account to become a member account in another organization, you must first delete the
 *             current organization of the management account.</p>
 * @public
 */
export class MasterCannotLeaveOrganizationException extends __BaseException {
  readonly name = "MasterCannotLeaveOrganizationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MasterCannotLeaveOrganizationException, __BaseException>) {
    super({
      name: "MasterCannotLeaveOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MasterCannotLeaveOrganizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Organizations can't complete your request because of an internal service error. Try again
 *             later.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have sent too many requests in too short a period of time. The quota helps protect
 *             against denial-of-service attacks. Try again later.</p>
 *          <p>For information about quotas that affect Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Quotas for Organizations</a> in the
 *                 <i>Organizations User Guide</i>.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
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
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>You attempted to close an account that is already closed.</p>
 * @public
 */
export class AccountAlreadyClosedException extends __BaseException {
  readonly name = "AccountAlreadyClosedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountAlreadyClosedException, __BaseException>) {
    super({
      name: "AccountAlreadyClosedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountAlreadyClosedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified account is already a delegated administrator for this Amazon Web Services
 *             service.</p>
 * @public
 */
export class AccountAlreadyRegisteredException extends __BaseException {
  readonly name = "AccountAlreadyRegisteredException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountAlreadyRegisteredException, __BaseException>) {
    super({
      name: "AccountAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountAlreadyRegisteredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> We can't find an Amazon Web Services account with the <code>AccountId</code> that you specified, or
 *             the account whose credentials you used to make this request isn't a member of an
 *             organization.</p>
 * @public
 */
export class AccountNotFoundException extends __BaseException {
  readonly name = "AccountNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountNotFoundException, __BaseException>) {
    super({
      name: "AccountNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified account is not a delegated administrator for this Amazon Web Services service. </p>
 * @public
 */
export class AccountNotRegisteredException extends __BaseException {
  readonly name = "AccountNotRegisteredException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountNotRegisteredException, __BaseException>) {
    super({
      name: "AccountNotRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountNotRegisteredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't invite an existing account to your organization until you verify that you
 *             own the email address associated with the management account. For more information, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_create.html#about-email-verification">Email address
 *                 verification</a> in the <i>Organizations User Guide</i>.</p>
 * @public
 */
export class AccountOwnerNotVerifiedException extends __BaseException {
  readonly name = "AccountOwnerNotVerifiedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountOwnerNotVerifiedException, __BaseException>) {
    super({
      name: "AccountOwnerNotVerifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountOwnerNotVerifiedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This account is already a member of an organization. An account can belong to only one
 *             organization at a time.</p>
 * @public
 */
export class AlreadyInOrganizationException extends __BaseException {
  readonly name = "AlreadyInOrganizationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyInOrganizationException, __BaseException>) {
    super({
      name: "AlreadyInOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyInOrganizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The selected policy is already attached to the specified target.</p>
 * @public
 */
export class DuplicatePolicyAttachmentException extends __BaseException {
  readonly name = "DuplicatePolicyAttachmentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicatePolicyAttachmentException, __BaseException>) {
    super({
      name: "DuplicatePolicyAttachmentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicatePolicyAttachmentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Changes to the effective policy are in progress, and its contents can't be returned.
 *             Try the operation again later. </p>
 * @public
 */
export class PolicyChangesInProgressException extends __BaseException {
  readonly name = "PolicyChangesInProgressException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyChangesInProgressException, __BaseException>) {
    super({
      name: "PolicyChangesInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyChangesInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find a policy with the <code>PolicyId</code> that you specified.</p>
 * @public
 */
export class PolicyNotFoundException extends __BaseException {
  readonly name = "PolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFoundException, __BaseException>) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified policy type isn't currently enabled in this root. You can't attach
 *             policies of the specified type to entities in a root until you enable that type in the
 *             root. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features
 *                 in your organization</a> in the <i>Organizations User Guide</i>.</p>
 * @public
 */
export class PolicyTypeNotEnabledException extends __BaseException {
  readonly name = "PolicyTypeNotEnabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyTypeNotEnabledException, __BaseException>) {
    super({
      name: "PolicyTypeNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyTypeNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find a root, OU, account, or policy with the <code>TargetId</code> that you
 *             specified.</p>
 * @public
 */
export class TargetNotFoundException extends __BaseException {
  readonly name = "TargetNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetNotFoundException, __BaseException>) {
    super({
      name: "TargetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This action isn't available in the current Amazon Web Services Region.</p>
 * @public
 */
export class UnsupportedAPIEndpointException extends __BaseException {
  readonly name = "UnsupportedAPIEndpointException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedAPIEndpointException, __BaseException>) {
    super({
      name: "UnsupportedAPIEndpointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedAPIEndpointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request failed because it conflicts with the current state of the specified
 *             resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
 * <p>Organizations couldn't perform the operation because your organization hasn't finished
 *             initializing. This can take up to an hour. Try again later. If after one hour you
 *             continue to receive this error, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
 * @public
 */
export class FinalizingOrganizationException extends __BaseException {
  readonly name = "FinalizingOrganizationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FinalizingOrganizationException, __BaseException>) {
    super({
      name: "FinalizingOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FinalizingOrganizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An OU with the same name already exists.</p>
 * @public
 */
export class DuplicateOrganizationalUnitException extends __BaseException {
  readonly name = "DuplicateOrganizationalUnitException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateOrganizationalUnitException, __BaseException>) {
    super({
      name: "DuplicateOrganizationalUnitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateOrganizationalUnitException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find a root or OU with the <code>ParentId</code> that you specified.</p>
 * @public
 */
export class ParentNotFoundException extends __BaseException {
  readonly name = "ParentNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParentNotFoundException, __BaseException>) {
    super({
      name: "ParentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParentNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A policy with the same name already exists.</p>
 * @public
 */
export class DuplicatePolicyException extends __BaseException {
  readonly name = "DuplicatePolicyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicatePolicyException, __BaseException>) {
    super({
      name: "DuplicatePolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicatePolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The provided policy document doesn't meet the requirements of the specified policy
 *             type. For example, the syntax might be incorrect. For details about service control
 *             policy syntax, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html">SCP syntax</a> in the
 *                 <i>Organizations User Guide</i>.</p>
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  readonly name = "MalformedPolicyDocumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't use the specified policy type with the feature set currently enabled for
 *             this organization. For example, you can enable SCPs only after you enable all features
 *             in the organization. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html#enable_policies_on_root">Managing
 *                 Organizations policies</a>in the <i>Organizations User Guide</i>.</p>
 * @public
 */
export class PolicyTypeNotAvailableForOrganizationException extends __BaseException {
  readonly name = "PolicyTypeNotAvailableForOrganizationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyTypeNotAvailableForOrganizationException, __BaseException>) {
    super({
      name: "PolicyTypeNotAvailableForOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyTypeNotAvailableForOrganizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The organization isn't empty. To delete an organization, you must first remove all
 *             accounts except the management account.</p>
 * @public
 */
export class OrganizationNotEmptyException extends __BaseException {
  readonly name = "OrganizationNotEmptyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotEmptyException, __BaseException>) {
    super({
      name: "OrganizationNotEmptyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotEmptyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified OU is not empty. Move all accounts to another root or to other OUs,
 *             remove all child OUs, and try the operation again.</p>
 * @public
 */
export class OrganizationalUnitNotEmptyException extends __BaseException {
  readonly name = "OrganizationalUnitNotEmptyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationalUnitNotEmptyException, __BaseException>) {
    super({
      name: "OrganizationalUnitNotEmptyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationalUnitNotEmptyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find an OU with the <code>OrganizationalUnitId</code> that you
 *             specified.</p>
 * @public
 */
export class OrganizationalUnitNotFoundException extends __BaseException {
  readonly name = "OrganizationalUnitNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationalUnitNotFoundException, __BaseException>) {
    super({
      name: "OrganizationalUnitNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationalUnitNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The policy is attached to one or more entities. You must detach it from all roots,
 *             OUs, and accounts before performing this operation.</p>
 * @public
 */
export class PolicyInUseException extends __BaseException {
  readonly name = "PolicyInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyInUseException, __BaseException>) {
    super({
      name: "PolicyInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find a resource policy request with the parameter that you specified.</p>
 * @public
 */
export class ResourcePolicyNotFoundException extends __BaseException {
  readonly name = "ResourcePolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyNotFoundException, __BaseException>) {
    super({
      name: "ResourcePolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find an create account request with the <code>CreateAccountRequestId</code>
 *             that you specified.</p>
 * @public
 */
export class CreateAccountStatusNotFoundException extends __BaseException {
  readonly name = "CreateAccountStatusNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateAccountStatusNotFoundException, __BaseException>) {
    super({
      name: "CreateAccountStatusNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateAccountStatusNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>If you ran this action on the management account, this policy type is not enabled. If
 *             you ran the action on a member account, the account doesn't have an effective policy of
 *             this type. Contact the administrator of your organization about attaching a policy of
 *             this type to the account. </p>
 * @public
 */
export class EffectivePolicyNotFoundException extends __BaseException {
  readonly name = "EffectivePolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EffectivePolicyNotFoundException, __BaseException>) {
    super({
      name: "EffectivePolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EffectivePolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find a transfer that you specified.</p>
 * @public
 */
export class ResponsibilityTransferNotFoundException extends __BaseException {
  readonly name = "ResponsibilityTransferNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResponsibilityTransferNotFoundException, __BaseException>) {
    super({
      name: "ResponsibilityTransferNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResponsibilityTransferNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The policy isn't attached to the specified target in the specified root.</p>
 * @public
 */
export class PolicyNotAttachedException extends __BaseException {
  readonly name = "PolicyNotAttachedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotAttachedException, __BaseException>) {
    super({
      name: "PolicyNotAttachedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotAttachedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find a root with the <code>RootId</code> that you specified.</p>
 * @public
 */
export class RootNotFoundException extends __BaseException {
  readonly name = "RootNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RootNotFoundException, __BaseException>) {
    super({
      name: "RootNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RootNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified policy type is already enabled in the specified root.</p>
 * @public
 */
export class PolicyTypeAlreadyEnabledException extends __BaseException {
  readonly name = "PolicyTypeAlreadyEnabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyTypeAlreadyEnabledException, __BaseException>) {
    super({
      name: "PolicyTypeAlreadyEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyTypeAlreadyEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A handshake with the same action and target already exists. For example, if you
 *             invited an account to join your organization, the invited account might already have a
 *             pending invitation from this organization. If you intend to resend an invitation to an
 *             account, ensure that existing handshakes that might be considered duplicates are
 *             canceled or declined.</p>
 * @public
 */
export class DuplicateHandshakeException extends __BaseException {
  readonly name = "DuplicateHandshakeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateHandshakeException, __BaseException>) {
    super({
      name: "DuplicateHandshakeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateHandshakeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find an organizational unit (OU) or Amazon Web Services account with the
 *                 <code>ChildId</code> that you specified.</p>
 * @public
 */
export class ChildNotFoundException extends __BaseException {
  readonly name = "ChildNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChildNotFoundException, __BaseException>) {
    super({
      name: "ChildNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChildNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find the destination container (a root or OU) with the <code>ParentId</code>
 *             that you specified.</p>
 * @public
 */
export class DestinationParentNotFoundException extends __BaseException {
  readonly name = "DestinationParentNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DestinationParentNotFoundException, __BaseException>) {
    super({
      name: "DestinationParentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DestinationParentNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>That account is already present in the specified destination.</p>
 * @public
 */
export class DuplicateAccountException extends __BaseException {
  readonly name = "DuplicateAccountException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateAccountException, __BaseException>) {
    super({
      name: "DuplicateAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateAccountException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find a source root or OU with the <code>ParentId</code> that you
 *             specified.</p>
 * @public
 */
export class SourceParentNotFoundException extends __BaseException {
  readonly name = "SourceParentNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceParentNotFoundException, __BaseException>) {
    super({
      name: "SourceParentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceParentNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The responsibility transfer can't transition to the requested state because it's not
 *             in a valid state for this operation.</p>
 * @public
 */
export class InvalidResponsibilityTransferTransitionException extends __BaseException {
  readonly name = "InvalidResponsibilityTransferTransitionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResponsibilityTransferTransitionException, __BaseException>) {
    super({
      name: "InvalidResponsibilityTransferTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResponsibilityTransferTransitionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The responsibility transfer is already in the status that you specified.</p>
 * @public
 */
export class ResponsibilityTransferAlreadyInStatusException extends __BaseException {
  readonly name = "ResponsibilityTransferAlreadyInStatusException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResponsibilityTransferAlreadyInStatusException, __BaseException>) {
    super({
      name: "ResponsibilityTransferAlreadyInStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResponsibilityTransferAlreadyInStatusException.prototype);
    this.Message = opts.Message;
  }
}
