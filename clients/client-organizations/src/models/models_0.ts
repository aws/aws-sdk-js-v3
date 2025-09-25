// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OrganizationsServiceException as __BaseException } from "./OrganizationsServiceException";

/**
 * @public
 */
export interface AcceptHandshakeRequest {
  /**
   * <p>The unique identifier (ID) of the handshake that you want to accept.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionType = {
  ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE: "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE",
  APPROVE_ALL_FEATURES: "APPROVE_ALL_FEATURES",
  ENABLE_ALL_FEATURES: "ENABLE_ALL_FEATURES",
  INVITE_ACCOUNT_TO_ORGANIZATION: "INVITE",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const HandshakePartyType = {
  ACCOUNT: "ACCOUNT",
  EMAIL: "EMAIL",
  ORGANIZATION: "ORGANIZATION",
} as const;

/**
 * @public
 */
export type HandshakePartyType = (typeof HandshakePartyType)[keyof typeof HandshakePartyType];

/**
 * <p>Identifies a participant in a handshake.</p>
 * @public
 */
export interface HandshakeParty {
  /**
   * <p>The unique identifier (ID) for the party.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of party.</p>
   * @public
   */
  Type: HandshakePartyType | undefined;
}

/**
 * @public
 * @enum
 */
export const HandshakeResourceType = {
  ACCOUNT: "ACCOUNT",
  EMAIL: "EMAIL",
  MASTER_EMAIL: "MASTER_EMAIL",
  MASTER_NAME: "MASTER_NAME",
  NOTES: "NOTES",
  ORGANIZATION: "ORGANIZATION",
  ORGANIZATION_FEATURE_SET: "ORGANIZATION_FEATURE_SET",
  PARENT_HANDSHAKE: "PARENT_HANDSHAKE",
} as const;

/**
 * @public
 */
export type HandshakeResourceType = (typeof HandshakeResourceType)[keyof typeof HandshakeResourceType];

/**
 * @public
 * @enum
 */
export const HandshakeState = {
  ACCEPTED: "ACCEPTED",
  CANCELED: "CANCELED",
  DECLINED: "DECLINED",
  EXPIRED: "EXPIRED",
  OPEN: "OPEN",
  REQUESTED: "REQUESTED",
} as const;

/**
 * @public
 */
export type HandshakeState = (typeof HandshakeState)[keyof typeof HandshakeState];

/**
 * <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * @public
 * @enum
 */
export const AccessDeniedForDependencyExceptionReason = {
  ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE: "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE",
} as const;

/**
 * @public
 */
export type AccessDeniedForDependencyExceptionReason =
  (typeof AccessDeniedForDependencyExceptionReason)[keyof typeof AccessDeniedForDependencyExceptionReason];

/**
 * <p>The operation that you attempted requires you to have the
 *                 <code>iam:CreateServiceLinkedRole</code> for
 *                 <code>organizations.amazonaws.com</code> permission so that Organizations can create the
 *             required service-linked role. You don't have that permission.</p>
 * @public
 */
export class AccessDeniedForDependencyException extends __BaseException {
  readonly name: "AccessDeniedForDependencyException" = "AccessDeniedForDependencyException";
  readonly $fault: "client" = "client";
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
  readonly name: "AWSOrganizationsNotInUseException" = "AWSOrganizationsNotInUseException";
  readonly $fault: "client" = "client";
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
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
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
 * <p>The specified handshake is already in the requested state. For example, you can't
 *             accept a handshake that was already accepted.</p>
 * @public
 */
export class HandshakeAlreadyInStateException extends __BaseException {
  readonly name: "HandshakeAlreadyInStateException" = "HandshakeAlreadyInStateException";
  readonly $fault: "client" = "client";
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
 * @public
 * @enum
 */
export const HandshakeConstraintViolationExceptionReason = {
  ACCOUNT_NUMBER_LIMIT_EXCEEDED: "ACCOUNT_NUMBER_LIMIT_EXCEEDED",
  ALREADY_IN_AN_ORGANIZATION: "ALREADY_IN_AN_ORGANIZATION",
  HANDSHAKE_RATE_LIMIT_EXCEEDED: "HANDSHAKE_RATE_LIMIT_EXCEEDED",
  INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES: "INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES",
  MANAGEMENT_ACCOUNT_EMAIL_NOT_VERIFIED: "MANAGEMENT_ACCOUNT_EMAIL_NOT_VERIFIED",
  ORGANIZATION_ALREADY_HAS_ALL_FEATURES: "ORGANIZATION_ALREADY_HAS_ALL_FEATURES",
  ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD: "ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD",
  ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION: "ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION",
  ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED: "ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED",
  PAYMENT_INSTRUMENT_REQUIRED: "PAYMENT_INSTRUMENT_REQUIRED",
} as const;

/**
 * @public
 */
export type HandshakeConstraintViolationExceptionReason =
  (typeof HandshakeConstraintViolationExceptionReason)[keyof typeof HandshakeConstraintViolationExceptionReason];

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
 *                <p>ORGANIZATION_ALREADY_HAS_ALL_FEATURES: The handshake request is invalid
 *                     because the organization has already enabled all features.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION: The handshake request
 *                     is invalid because the organization has already started the process to enable
 *                     all features.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD: The request failed because the
 *                     account is from a different marketplace than the accounts in the
 *                     organization.</p>
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
 *          </ul>
 * @public
 */
export class HandshakeConstraintViolationException extends __BaseException {
  readonly name: "HandshakeConstraintViolationException" = "HandshakeConstraintViolationException";
  readonly $fault: "client" = "client";
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
  readonly name: "HandshakeNotFoundException" = "HandshakeNotFoundException";
  readonly $fault: "client" = "client";
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
  readonly name: "InvalidHandshakeTransitionException" = "InvalidHandshakeTransitionException";
  readonly $fault: "client" = "client";
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
 * @public
 * @enum
 */
export const InvalidInputExceptionReason = {
  DUPLICATE_TAG_KEY: "DUPLICATE_TAG_KEY",
  IMMUTABLE_POLICY: "IMMUTABLE_POLICY",
  INPUT_REQUIRED: "INPUT_REQUIRED",
  INVALID_EMAIL_ADDRESS_TARGET: "INVALID_EMAIL_ADDRESS_TARGET",
  INVALID_ENUM: "INVALID_ENUM",
  INVALID_ENUM_POLICY_TYPE: "INVALID_ENUM_POLICY_TYPE",
  INVALID_FULL_NAME_TARGET: "INVALID_FULL_NAME_TARGET",
  INVALID_LIST_MEMBER: "INVALID_LIST_MEMBER",
  INVALID_PAGINATION_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_PARTY_TYPE_TARGET: "INVALID_PARTY_TYPE_TARGET",
  INVALID_PATTERN: "INVALID_PATTERN",
  INVALID_PATTERN_TARGET_ID: "INVALID_PATTERN_TARGET_ID",
  INVALID_PRINCIPAL: "INVALID_PRINCIPAL",
  INVALID_RESOURCE_POLICY_JSON: "INVALID_RESOURCE_POLICY_JSON",
  INVALID_ROLE_NAME: "INVALID_ROLE_NAME",
  INVALID_SYNTAX_ORGANIZATION: "INVALID_SYNTAX_ORGANIZATION_ARN",
  INVALID_SYNTAX_POLICY: "INVALID_SYNTAX_POLICY_ID",
  INVALID_SYSTEM_TAGS_PARAMETER: "INVALID_SYSTEM_TAGS_PARAMETER",
  MAX_FILTER_LIMIT_EXCEEDED: "MAX_LIMIT_EXCEEDED_FILTER",
  MAX_LENGTH_EXCEEDED: "MAX_LENGTH_EXCEEDED",
  MAX_VALUE_EXCEEDED: "MAX_VALUE_EXCEEDED",
  MIN_LENGTH_EXCEEDED: "MIN_LENGTH_EXCEEDED",
  MIN_VALUE_EXCEEDED: "MIN_VALUE_EXCEEDED",
  MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: "MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS",
  NON_DETACHABLE_POLICY: "NON_DETACHABLE_POLICY",
  TARGET_NOT_SUPPORTED: "TARGET_NOT_SUPPORTED",
  UNRECOGNIZED_SERVICE_PRINCIPAL: "UNRECOGNIZED_SERVICE_PRINCIPAL",
  UNSUPPORTED_ACTION_IN_RESOURCE_POLICY: "UNSUPPORTED_ACTION_IN_RESOURCE_POLICY",
  UNSUPPORTED_POLICY_TYPE_IN_RESOURCE_POLICY: "UNSUPPORTED_POLICY_TYPE_IN_RESOURCE_POLICY",
  UNSUPPORTED_RESOURCE_IN_RESOURCE_POLICY: "UNSUPPORTED_RESOURCE_IN_RESOURCE_POLICY",
} as const;

/**
 * @public
 */
export type InvalidInputExceptionReason =
  (typeof InvalidInputExceptionReason)[keyof typeof InvalidInputExceptionReason];

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
 *                <p>DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same
 *                     entity.</p>
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
 *                <p>TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't
 *                     recognized.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
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
 * <p>Organizations can't complete your request because of an internal service error. Try again
 *             later.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
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
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
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
 * @public
 * @enum
 */
export const AccountJoinedMethod = {
  CREATED: "CREATED",
  INVITED: "INVITED",
} as const;

/**
 * @public
 */
export type AccountJoinedMethod = (typeof AccountJoinedMethod)[keyof typeof AccountJoinedMethod];

/**
 * @public
 * @enum
 */
export const AccountState = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
  PENDING_CLOSURE: "PENDING_CLOSURE",
  SUSPENDED: "SUSPENDED",
} as const;

/**
 * @public
 */
export type AccountState = (typeof AccountState)[keyof typeof AccountState];

/**
 * @public
 * @enum
 */
export const AccountStatus = {
  ACTIVE: "ACTIVE",
  PENDING_CLOSURE: "PENDING_CLOSURE",
  SUSPENDED: "SUSPENDED",
} as const;

/**
 * @public
 */
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/**
 * <p>Contains information about an Amazon Web Services account that is a member of an
 *             organization.</p>
 * @public
 */
export interface Account {
  /**
   * <p>The unique identifier (ID) of the account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The email address associated with the Amazon Web Services account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for this parameter is a string of characters that represents a
   *             standard internet email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The friendly name of the account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the account in the organization.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the <code>Account</code> object will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Status?: AccountStatus | undefined;

  /**
   * <p>Each state represents a specific phase in the account lifecycle. Use this information
   *             to manage account access, automate workflows, or trigger actions based on account state
   *             changes.</p>
   *          <p>For more information about account states and their implications, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_account_state.html">Monitor the state of your Amazon Web Services accounts </a> in the
   *                 <i>Organizations User Guide</i>.</p>
   * @public
   */
  State?: AccountState | undefined;

  /**
   * <p>The method by which the account joined the organization.</p>
   * @public
   */
  JoinedMethod?: AccountJoinedMethod | undefined;

  /**
   * <p>The date the account became a part of the organization.</p>
   * @public
   */
  JoinedTimestamp?: Date | undefined;
}

/**
 * <p>You attempted to close an account that is already closed.</p>
 * @public
 */
export class AccountAlreadyClosedException extends __BaseException {
  readonly name: "AccountAlreadyClosedException" = "AccountAlreadyClosedException";
  readonly $fault: "client" = "client";
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
  readonly name: "AccountAlreadyRegisteredException" = "AccountAlreadyRegisteredException";
  readonly $fault: "client" = "client";
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
  readonly name: "AccountNotFoundException" = "AccountNotFoundException";
  readonly $fault: "client" = "client";
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
  readonly name: "AccountNotRegisteredException" = "AccountNotRegisteredException";
  readonly $fault: "client" = "client";
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
  readonly name: "AccountOwnerNotVerifiedException" = "AccountOwnerNotVerifiedException";
  readonly $fault: "client" = "client";
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
  readonly name: "AlreadyInOrganizationException" = "AlreadyInOrganizationException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface AttachPolicyRequest {
  /**
   * <p>The unique identifier (ID) of the policy that you want to attach to the target. You
   *             can get the ID for the policy by calling the <a>ListPolicies</a>
   *             operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root, OU, or account that you want to attach the
   *             policy to. You can get the ID by calling the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a>
   *             operations.</p>
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
   * @public
   */
  TargetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConstraintViolationExceptionReason = {
  ACCOUNT_CANNOT_LEAVE_ORGANIZATION: "ACCOUNT_CANNOT_LEAVE_ORGANIZATION",
  ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA: "ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA",
  ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: "ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION",
  ACCOUNT_CREATION_NOT_COMPLETE: "ACCOUNT_CREATION_NOT_COMPLETE",
  ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: "ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED",
  ACCOUNT_NUMBER_LIMIT_EXCEEDED: "ACCOUNT_NUMBER_LIMIT_EXCEEDED",
  ALL_FEATURES_MIGRATION_ORGANIZATION_SIZE_LIMIT_EXCEEDED: "ALL_FEATURES_MIGRATION_ORGANIZATION_SIZE_LIMIT_EXCEEDED",
  CANNOT_CLOSE_MANAGEMENT_ACCOUNT: "CANNOT_CLOSE_MANAGEMENT_ACCOUNT",
  CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR: "CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR",
  CANNOT_REGISTER_SUSPENDED_ACCOUNT_AS_DELEGATED_ADMINISTRATOR:
    "CANNOT_REGISTER_SUSPENDED_ACCOUNT_AS_DELEGATED_ADMINISTRATOR",
  CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG: "CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG",
  CLOSE_ACCOUNT_QUOTA_EXCEEDED: "CLOSE_ACCOUNT_QUOTA_EXCEEDED",
  CLOSE_ACCOUNT_REQUESTS_LIMIT_EXCEEDED: "CLOSE_ACCOUNT_REQUESTS_LIMIT_EXCEEDED",
  CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION: "CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION",
  DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE: "DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE",
  EMAIL_VERIFICATION_CODE_EXPIRED: "EMAIL_VERIFICATION_CODE_EXPIRED",
  HANDSHAKE_RATE_LIMIT_EXCEEDED: "HANDSHAKE_RATE_LIMIT_EXCEEDED",
  INVALID_PAYMENT_INSTRUMENT: "INVALID_PAYMENT_INSTRUMENT",
  MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: "MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE",
  MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE: "MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE",
  MASTER_ACCOUNT_MISSING_CONTACT_INFO: "MASTER_ACCOUNT_MISSING_CONTACT_INFO",
  MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED: "MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED",
  MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: "MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED",
  MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED: "MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED",
  MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: "MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED",
  MAX_TAG_LIMIT_EXCEEDED: "MAX_TAG_LIMIT_EXCEEDED",
  MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: "MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED",
  MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: "MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED",
  ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: "ORGANIZATION_NOT_IN_ALL_FEATURES_MODE",
  OU_DEPTH_LIMIT_EXCEEDED: "OU_DEPTH_LIMIT_EXCEEDED",
  OU_NUMBER_LIMIT_EXCEEDED: "OU_NUMBER_LIMIT_EXCEEDED",
  POLICY_CONTENT_LIMIT_EXCEEDED: "POLICY_CONTENT_LIMIT_EXCEEDED",
  POLICY_NUMBER_LIMIT_EXCEEDED: "POLICY_NUMBER_LIMIT_EXCEEDED",
  POLICY_TYPE_ENABLED_FOR_THIS_SERVICE: "POLICY_TYPE_ENABLED_FOR_THIS_SERVICE",
  SERVICE_ACCESS_NOT_ENABLED: "SERVICE_ACCESS_NOT_ENABLED",
  TAG_POLICY_VIOLATION: "TAG_POLICY_VIOLATION",
  WAIT_PERIOD_ACTIVE: "WAIT_PERIOD_ACTIVE",
} as const;

/**
 * @public
 */
export type ConstraintViolationExceptionReason =
  (typeof ConstraintViolationExceptionReason)[keyof typeof ConstraintViolationExceptionReason];

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
 *                     verfication code.</p>
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
 *                <p>WAIT_PERIOD_ACTIVE: After you create an Amazon Web Services account, you must wait until at
 *                     least seven days after the account was created. Invited accounts aren't subject
 *                     to this waiting period.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ConstraintViolationException extends __BaseException {
  readonly name: "ConstraintViolationException" = "ConstraintViolationException";
  readonly $fault: "client" = "client";
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
 * <p>The selected policy is already attached to the specified target.</p>
 * @public
 */
export class DuplicatePolicyAttachmentException extends __BaseException {
  readonly name: "DuplicatePolicyAttachmentException" = "DuplicatePolicyAttachmentException";
  readonly $fault: "client" = "client";
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
  readonly name: "PolicyChangesInProgressException" = "PolicyChangesInProgressException";
  readonly $fault: "client" = "client";
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
  readonly name: "PolicyNotFoundException" = "PolicyNotFoundException";
  readonly $fault: "client" = "client";
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
  readonly name: "PolicyTypeNotEnabledException" = "PolicyTypeNotEnabledException";
  readonly $fault: "client" = "client";
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
  readonly name: "TargetNotFoundException" = "TargetNotFoundException";
  readonly $fault: "client" = "client";
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
  readonly name: "UnsupportedAPIEndpointException" = "UnsupportedAPIEndpointException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface CancelHandshakeRequest {
  /**
   * <p>The unique identifier (ID) of the handshake that you want to cancel. You can get the
   *             ID from the <a>ListHandshakesForOrganization</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface CloseAccountRequest {
  /**
   * <p>Retrieves the Amazon Web Services account Id for the current <code>CloseAccount</code> API request.
   *         </p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * <p>The request failed because it conflicts with the current state of the specified
 *             resource.</p>
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
 * @public
 * @enum
 */
export const IAMUserAccessToBilling = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type IAMUserAccessToBilling = (typeof IAMUserAccessToBilling)[keyof typeof IAMUserAccessToBilling];

/**
 * <p>A custom key-value pair associated with a resource within your organization.</p>
 *          <p>You can attach tags to any of the following organization resources.</p>
 *          <ul>
 *             <li>
 *                <p>Amazon Web Services account</p>
 *             </li>
 *             <li>
 *                <p>Organizational unit (OU)</p>
 *             </li>
 *             <li>
 *                <p>Organization root</p>
 *             </li>
 *             <li>
 *                <p>Policy</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Tag {
  /**
   * <p>The key identifier, or name, of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The string value that's associated with the key of the tag. You can set the value of a
   *             tag to an empty string, but you can't set the value of a tag to null.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountRequest {
  /**
   * <p>The email address of the owner to assign to the new member account. This email address
   *             must not already be associated with another Amazon Web Services account. You must use a valid email
   *             address to complete account creation.</p>
   *          <p>The rules for a valid email address:</p>
   *          <ul>
   *             <li>
   *                <p>The address must be a minimum of 6 and a maximum of 64 characters long.</p>
   *             </li>
   *             <li>
   *                <p>All characters must be 7-bit ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>There must be one and only one @ symbol, which separates the local name from
   *                     the domain name.</p>
   *             </li>
   *             <li>
   *                <p>The local name can't contain any of the following characters:</p>
   *                <p>whitespace, " ' ( ) < > [ ] : ; , \ | % &</p>
   *             </li>
   *             <li>
   *                <p>The local name can't begin with a dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen
   *                     (-), or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can't begin or end with a hyphen (-) or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name must contain at least one dot</p>
   *             </li>
   *          </ul>
   *          <p>You can't access the root user of the account or remove an account that was created
   *             with an invalid email address.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The friendly name of the member account.</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>The name of an IAM role that Organizations automatically preconfigures in the new member
   *             account. This role trusts the management account, allowing users in the management
   *             account to assume the role, as permitted by the management account administrator. The
   *             role has administrator permissions in the new member account.</p>
   *          <p>If you don't specify this parameter, the role name defaults to
   *                 <code>OrganizationAccountAccessRole</code>.</p>
   *          <p>For more information about how to use this role to access the member account, see the
   *             following links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Creating the OrganizationAccountAccessRole in an invited member
   *                         account</a> in the <i>Organizations User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">IAM Tutorial:
   *                         Delegate access across Amazon Web Services accounts using IAM roles</a> in the
   *                         <i>IAM User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that
   *     is used to validate this parameter. The pattern can include uppercase
   *     letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>If set to <code>ALLOW</code>, the new account enables IAM users to access account
   *             billing information <i>if</i> they have the required permissions. If set
   *             to <code>DENY</code>, only the root user of the new account can access account billing
   *             information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">About IAM
   *                 access to the Billing and Cost Management console</a> in the
   *             <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   *          <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>, and
   *             IAM users and roles with the required permissions can access billing information for
   *             the new account.</p>
   * @public
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created account. For each tag in
   *             the list, you must specify both a tag key and a value. You can set the value to an empty
   *             string, but you can't set it to <code>null</code>. For more information about tagging,
   *             see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations
   *                 resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the maximum allowed number of
   *                 tags for an account, then the entire request fails and the account is not
   *                 created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CreateAccountFailureReason = {
  ACCOUNT_LIMIT_EXCEEDED: "ACCOUNT_LIMIT_EXCEEDED",
  CONCURRENT_ACCOUNT_MODIFICATION: "CONCURRENT_ACCOUNT_MODIFICATION",
  EMAIL_ALREADY_EXISTS: "EMAIL_ALREADY_EXISTS",
  FAILED_BUSINESS_VALIDATION: "FAILED_BUSINESS_VALIDATION",
  GOVCLOUD_ACCOUNT_ALREADY_EXISTS: "GOVCLOUD_ACCOUNT_ALREADY_EXISTS",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  INVALID_ADDRESS: "INVALID_ADDRESS",
  INVALID_EMAIL: "INVALID_EMAIL",
  INVALID_IDENTITY_FOR_BUSINESS_VALIDATION: "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION",
  INVALID_PAYMENT_INSTRUMENT: "INVALID_PAYMENT_INSTRUMENT",
  MISSING_BUSINESS_VALIDATION: "MISSING_BUSINESS_VALIDATION",
  MISSING_PAYMENT_INSTRUMENT: "MISSING_PAYMENT_INSTRUMENT",
  PENDING_BUSINESS_VALIDATIONv: "PENDING_BUSINESS_VALIDATION",
  UNKNOWN_BUSINESS_VALIDATION: "UNKNOWN_BUSINESS_VALIDATION",
  UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED: "UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED",
} as const;

/**
 * @public
 */
export type CreateAccountFailureReason = (typeof CreateAccountFailureReason)[keyof typeof CreateAccountFailureReason];

/**
 * @public
 * @enum
 */
export const CreateAccountState = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type CreateAccountState = (typeof CreateAccountState)[keyof typeof CreateAccountState];

/**
 * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services
 *             GovCloud (US) account in an organization.</p>
 * @public
 */
export interface CreateAccountStatus {
  /**
   * <p>The unique identifier (ID) that references this request. You get this value from the
   *             response of the initial <a>CreateAccount</a> request to create the
   *             account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string
   *     requires "car-" followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The account name given to the account when it was created.</p>
   * @public
   */
  AccountName?: string | undefined;

  /**
   * <p>The status of the asynchronous request to create an Amazon Web Services account.</p>
   * @public
   */
  State?: CreateAccountState | undefined;

  /**
   * <p>The date and time that the request was made for the account creation.</p>
   * @public
   */
  RequestedTimestamp?: Date | undefined;

  /**
   * <p>The date and time that the account was created and the request completed.</p>
   * @public
   */
  CompletedTimestamp?: Date | undefined;

  /**
   * <p>If the account was created successfully, the unique identifier (ID) of the new
   *             account.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>If the account was created successfully, the unique identifier (ID) of the new account
   *             in the Amazon Web Services GovCloud (US) Region.</p>
   * @public
   */
  GovCloudAccountId?: string | undefined;

  /**
   * <p>If the request failed, a description of the reason for the failure.</p>
   *          <ul>
   *             <li>
   *                <p>ACCOUNT_LIMIT_EXCEEDED: The account couldn't be created because you reached
   *                     the limit on the number of accounts in your organization.</p>
   *             </li>
   *             <li>
   *                <p>CONCURRENT_ACCOUNT_MODIFICATION: You already submitted a request with the same
   *                     information.</p>
   *             </li>
   *             <li>
   *                <p>EMAIL_ALREADY_EXISTS: The account could not be created because another Amazon Web Services
   *                     account with that email address already exists.</p>
   *             </li>
   *             <li>
   *                <p>FAILED_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization
   *                     failed to receive business license validation.</p>
   *             </li>
   *             <li>
   *                <p>GOVCLOUD_ACCOUNT_ALREADY_EXISTS: The account in the Amazon Web Services GovCloud (US) Region
   *                     could not be created because this Region already includes an account with that
   *                     email address.</p>
   *             </li>
   *             <li>
   *                <p>IDENTITY_INVALID_BUSINESS_VALIDATION: The Amazon Web Services account that owns your
   *                     organization can't complete business license validation because it doesn't have
   *                     valid identity data.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_ADDRESS: The account could not be created because the address you
   *                     provided is not valid.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_EMAIL: The account could not be created because the email address you
   *                     provided is not valid.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_PAYMENT_INSTRUMENT: The Amazon Web Services account that owns your organization does
   *                     not have a supported payment method associated with the account. Amazon Web Services does not
   *                     support cards issued by financial institutions in Russia or Belarus. For more
   *                     information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-general.html">Managing your
   *                         Amazon Web Services payments</a>.</p>
   *             </li>
   *             <li>
   *                <p>INTERNAL_FAILURE: The account could not be created because of an internal
   *                     failure. Try again later. If the problem persists, contact Amazon Web Services Customer
   *                     Support.</p>
   *             </li>
   *             <li>
   *                <p>MISSING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has
   *                     not received Business Validation.</p>
   *             </li>
   *             <li>
   *                <p> MISSING_PAYMENT_INSTRUMENT: You must configure the management account with a
   *                     valid payment method, such as a credit card.</p>
   *             </li>
   *             <li>
   *                <p>PENDING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization is
   *                     still in the process of completing business license validation.</p>
   *             </li>
   *             <li>
   *                <p>UNKNOWN_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has
   *                     an unknown issue with business license validation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureReason?: CreateAccountFailureReason | undefined;
}

/**
 * @public
 */
export interface CreateAccountResponse {
  /**
   * <p>A structure that contains details about the request to create an account. This
   *             response structure might not be fully populated when you first receive it because
   *             account creation is an asynchronous process. You can pass the returned
   *                 <code>CreateAccountStatus</code> ID as a parameter to <a>DescribeCreateAccountStatus</a> to get status about the progress of the
   *             request at later times. You can also check the CloudTrail log for the
   *                 <code>CreateAccountResult</code> event. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html">Logging and monitoring in Organizations</a> in the
   *                 <i>Organizations User Guide</i>.</p>
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * <p>Organizations couldn't perform the operation because your organization hasn't finished
 *             initializing. This can take up to an hour. Try again later. If after one hour you
 *             continue to receive this error, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
 * @public
 */
export class FinalizingOrganizationException extends __BaseException {
  readonly name: "FinalizingOrganizationException" = "FinalizingOrganizationException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface CreateGovCloudAccountRequest {
  /**
   * <p>Specifies the email address of the owner to assign to the new member account in the
   *             commercial Region. This email address must not already be associated with another
   *             Amazon Web Services account. You must use a valid email address to complete account creation.</p>
   *          <p>The rules for a valid email address:</p>
   *          <ul>
   *             <li>
   *                <p>The address must be a minimum of 6 and a maximum of 64 characters long.</p>
   *             </li>
   *             <li>
   *                <p>All characters must be 7-bit ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>There must be one and only one @ symbol, which separates the local name from
   *                     the domain name.</p>
   *             </li>
   *             <li>
   *                <p>The local name can't contain any of the following characters:</p>
   *                <p>whitespace, " ' ( ) < > [ ] : ; , \ | % &</p>
   *             </li>
   *             <li>
   *                <p>The local name can't begin with a dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen
   *                     (-), or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name can't begin or end with a hyphen (-) or dot (.)</p>
   *             </li>
   *             <li>
   *                <p>The domain name must contain at least one dot</p>
   *             </li>
   *          </ul>
   *          <p>You can't access the root user of the account or remove an account that was created
   *             with an invalid email address. Like all request parameters for
   *                 <code>CreateGovCloudAccount</code>, the request for the email address for the Amazon Web Services
   *             GovCloud (US) account originates from the commercial Region, not from the Amazon Web Services GovCloud
   *             (US) Region.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The friendly name of the member account. </p>
   *          <p>The account name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or
   *             dot (.) You can't separate characters with a dash (–).</p>
   * @public
   */
  AccountName: string | undefined;

  /**
   * <p>(Optional)</p>
   *          <p>The name of an IAM role that Organizations automatically preconfigures in the new member
   *             accounts in both the Amazon Web Services GovCloud (US) Region and in the commercial Region. This role
   *             trusts the management account, allowing users in the management account to assume the
   *             role, as permitted by the management account administrator. The role has administrator
   *             permissions in the new member account.</p>
   *          <p>If you don't specify this parameter, the role name defaults to
   *                 <code>OrganizationAccountAccessRole</code>.</p>
   *          <p>For more information about how to use this role to access the member account, see the
   *             following links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role">Creating the OrganizationAccountAccessRole in an invited member
   *                         account</a> in the <i>Organizations User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Steps 2 and 3 in <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html">IAM Tutorial:
   *                         Delegate access across Amazon Web Services accounts using IAM roles</a> in the
   *                         <i>IAM User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that
   *     is used to validate this parameter. The pattern can include uppercase
   *     letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>If set to <code>ALLOW</code>, the new linked account in the commercial Region enables
   *             IAM users to access account billing information <i>if</i> they have the
   *             required permissions. If set to <code>DENY</code>, only the root user of the new account
   *             can access account billing information. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">About IAM
   *                 access to the Billing and Cost Management console</a> in the
   *             <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>
   *          <p>If you don't specify this parameter, the value defaults to <code>ALLOW</code>, and
   *             IAM users and roles with the required permissions can access billing information for
   *             the new account.</p>
   * @public
   */
  IamUserAccessToBilling?: IAMUserAccessToBilling | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created account. These tags are
   *             attached to the commercial account associated with the GovCloud account, and not to the
   *             GovCloud account itself. To add tags to the actual GovCloud account, call the <a>TagResource</a> operation in the GovCloud region after the new GovCloud
   *             account exists.</p>
   *          <p>For each tag in the list, you must specify both a tag key and a value. You can set the
   *             value to an empty string, but you can't set it to <code>null</code>. For more
   *             information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the
   *             Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the maximum allowed number of
   *                 tags for an account, then the entire request fails and the account is not
   *                 created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGovCloudAccountResponse {
  /**
   * <p>Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an Amazon Web Services account or an Amazon Web Services
   *             GovCloud (US) account in an organization.</p>
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const OrganizationFeatureSet = {
  ALL: "ALL",
  CONSOLIDATED_BILLING: "CONSOLIDATED_BILLING",
} as const;

/**
 * @public
 */
export type OrganizationFeatureSet = (typeof OrganizationFeatureSet)[keyof typeof OrganizationFeatureSet];

/**
 * @public
 */
export interface CreateOrganizationRequest {
  /**
   * <p>Specifies the feature set supported by the new organization. Each feature set supports
   *             different levels of functionality.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONSOLIDATED_BILLING</code>: All member accounts have their bills
   *                     consolidated to and paid by the management account. For more information, see
   *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only">Consolidated billing</a> in the
   *                     <i>Organizations User Guide</i>.</p>
   *                <p> The consolidated billing feature subset isn't available for organizations in
   *                     the Amazon Web Services GovCloud (US) Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: In addition to all the features supported by the
   *                     consolidated billing feature set, the management account can also apply any
   *                     policy type to any member account in the organization. For more information, see
   *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all">All
   *                         features</a> in the <i>Organizations User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FeatureSet?: OrganizationFeatureSet | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyTypeStatus = {
  ENABLED: "ENABLED",
  PENDING_DISABLE: "PENDING_DISABLE",
  PENDING_ENABLE: "PENDING_ENABLE",
} as const;

/**
 * @public
 */
export type PolicyTypeStatus = (typeof PolicyTypeStatus)[keyof typeof PolicyTypeStatus];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  AISERVICES_OPT_OUT_POLICY: "AISERVICES_OPT_OUT_POLICY",
  BACKUP_POLICY: "BACKUP_POLICY",
  CHATBOT_POLICY: "CHATBOT_POLICY",
  DECLARATIVE_POLICY_EC2: "DECLARATIVE_POLICY_EC2",
  RESOURCE_CONTROL_POLICY: "RESOURCE_CONTROL_POLICY",
  SECURITYHUB_POLICY: "SECURITYHUB_POLICY",
  SERVICE_CONTROL_POLICY: "SERVICE_CONTROL_POLICY",
  TAG_POLICY: "TAG_POLICY",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * <p>Contains information about a policy type and its status in the associated root.</p>
 * @public
 */
export interface PolicyTypeSummary {
  /**
   * <p>The name of the policy type.</p>
   * @public
   */
  Type?: PolicyType | undefined;

  /**
   * <p>The status of the policy type as it relates to the associated root. To attach a policy
   *             of the specified type to a root or to an OU or account in that root, it must be
   *             available in the organization and enabled for that root.</p>
   * @public
   */
  Status?: PolicyTypeStatus | undefined;
}

/**
 * <p>Contains details about an organization. An organization is a collection of accounts
 *             that are centrally managed together using consolidated billing, organized hierarchically
 *             with organizational units (OUs), and controlled with policies .</p>
 * @public
 */
export interface Organization {
  /**
   * <p>The unique identifier (ID) of an organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organization ID string requires "o-"
   *     followed by from 10 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an organization.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Specifies the functionality that currently is available to the organization. If set to
   *             "ALL", then all features are enabled and policies can be applied to accounts in the
   *             organization. If set to "CONSOLIDATED_BILLING", then only consolidated billing
   *             functionality is available. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features
   *                 in your organization</a> in the <i>Organizations User Guide</i>.</p>
   * @public
   */
  FeatureSet?: OrganizationFeatureSet | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account that is designated as the management
   *             account for the organization.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  MasterAccountArn?: string | undefined;

  /**
   * <p>The unique identifier (ID) of the management account of an organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  MasterAccountId?: string | undefined;

  /**
   * <p>The email address that is associated with the Amazon Web Services account that is designated as the
   *             management account for the organization.</p>
   * @public
   */
  MasterAccountEmail?: string | undefined;

  /**
   * <important>
   *             <p>Do not use. This field is deprecated and doesn't provide complete information
   *                 about the policies in your organization.</p>
   *          </important>
   *          <p>To determine the policies that are enabled and available for use in your organization,
   *             use the <a>ListRoots</a> operation instead.</p>
   * @public
   */
  AvailablePolicyTypes?: PolicyTypeSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationResponse {
  /**
   * <p>A structure that contains details about the newly created organization.</p>
   * @public
   */
  Organization?: Organization | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationalUnitRequest {
  /**
   * <p>The unique identifier (ID) of the parent root or OU that you want to create the new OU
   *             in.</p>
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
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>The friendly name to assign to the new OU.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created OU. For each tag in the
   *             list, you must specify both a tag key and a value. You can set the value to an empty
   *             string, but you can't set it to <code>null</code>. For more information about tagging,
   *             see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations
   *                 resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the allowed number of tags
   *                 for an OU, then the entire request fails and the OU is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains details about an organizational unit (OU). An OU is a container of Amazon Web Services
 *             accounts within a root of an organization. Policies that are attached to an OU apply to
 *             all accounts contained in that OU and in any child OUs.</p>
 * @public
 */
export interface OrganizationalUnit {
  /**
   * <p>The unique identifier (ID) associated with this OU. The ID is unique to the
   *             organization only.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of this OU.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of this OU.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationalUnitResponse {
  /**
   * <p>A structure that contains details about the newly created OU.</p>
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * <p>An OU with the same name already exists.</p>
 * @public
 */
export class DuplicateOrganizationalUnitException extends __BaseException {
  readonly name: "DuplicateOrganizationalUnitException" = "DuplicateOrganizationalUnitException";
  readonly $fault: "client" = "client";
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
  readonly name: "ParentNotFoundException" = "ParentNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * <p>The policy text content to add to the new policy. The text that you supply must adhere
   *             to the rules of the policy type you specify in the <code>Type</code> parameter. </p>
   *          <p>The maximum size of a policy document depends on the policy's type. For more
   *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html#min-max-values">Maximum and minimum values</a> in the
   *             <i>Organizations User Guide</i>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>An optional description to assign to the policy.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The friendly name to assign to the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of policy to create. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: PolicyType | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created policy. For each tag in
   *             the list, you must specify both a tag key and a value. You can set the value to an empty
   *             string, but you can't set it to <code>null</code>. For more information about tagging,
   *             see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations
   *                 resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the allowed number of tags
   *                 for a policy, then the entire request fails and the policy is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about a policy, but does not include the content. To see the
 *             content of a policy, see <a>DescribePolicy</a>.</p>
 * @public
 */
export interface PolicySummary {
  /**
   * <p>The unique identifier (ID) of the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of policy.</p>
   * @public
   */
  Type?: PolicyType | undefined;

  /**
   * <p>A boolean value that indicates whether the specified policy is an Amazon Web Services managed
   *             policy. If true, then you can attach the policy to roots, OUs, or accounts, but you
   *             cannot edit it.</p>
   * @public
   */
  AwsManaged?: boolean | undefined;
}

/**
 * <p>Contains rules to be applied to the affected accounts. Policies can be attached
 *             directly to accounts, or to roots and OUs to affect all accounts in those
 *             hierarchies.</p>
 * @public
 */
export interface Policy {
  /**
   * <p>A structure that contains additional details about the policy.</p>
   * @public
   */
  PolicySummary?: PolicySummary | undefined;

  /**
   * <p>The text content of the policy.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * <p>A structure that contains details about the newly created policy.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * <p>A policy with the same name already exists.</p>
 * @public
 */
export class DuplicatePolicyException extends __BaseException {
  readonly name: "DuplicatePolicyException" = "DuplicatePolicyException";
  readonly $fault: "client" = "client";
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
  readonly name: "MalformedPolicyDocumentException" = "MalformedPolicyDocumentException";
  readonly $fault: "client" = "client";
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
  readonly name: "PolicyTypeNotAvailableForOrganizationException" = "PolicyTypeNotAvailableForOrganizationException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DeclineHandshakeRequest {
  /**
   * <p>The unique identifier (ID) of the handshake that you want to decline. You can get the
   *             ID from the <a>ListHandshakesForAccount</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * <p>The organization isn't empty. To delete an organization, you must first remove all
 *             accounts except the management account.</p>
 * @public
 */
export class OrganizationNotEmptyException extends __BaseException {
  readonly name: "OrganizationNotEmptyException" = "OrganizationNotEmptyException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DeleteOrganizationalUnitRequest {
  /**
   * <p>The unique identifier (ID) of the organizational unit that you want to delete. You can
   *             get the ID from the <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  OrganizationalUnitId: string | undefined;
}

/**
 * <p>The specified OU is not empty. Move all accounts to another root or to other OUs,
 *             remove all child OUs, and try the operation again.</p>
 * @public
 */
export class OrganizationalUnitNotEmptyException extends __BaseException {
  readonly name: "OrganizationalUnitNotEmptyException" = "OrganizationalUnitNotEmptyException";
  readonly $fault: "client" = "client";
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
  readonly name: "OrganizationalUnitNotFoundException" = "OrganizationalUnitNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * <p>The unique identifier (ID) of the policy that you want to delete. You can get the ID
   *             from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * <p>The policy is attached to one or more entities. You must detach it from all roots,
 *             OUs, and accounts before performing this operation.</p>
 * @public
 */
export class PolicyInUseException extends __BaseException {
  readonly name: "PolicyInUseException" = "PolicyInUseException";
  readonly $fault: "client" = "client";
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
  readonly name: "ResourcePolicyNotFoundException" = "ResourcePolicyNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DeregisterDelegatedAdministratorRequest {
  /**
   * <p>The account ID number of the member account in the organization that you want to
   *             deregister as a delegated administrator.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The service principal name of an Amazon Web Services service for which the account is a delegated
   *             administrator.</p>
   *          <p>Delegated administrator privileges are revoked for only the specified Amazon Web Services service
   *             from the member account. If the specified service is the only service for which the
   *             member account is a delegated administrator, the operation also revokes Organizations read action
   *             permissions.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountRequest {
  /**
   * <p>The unique identifier (ID) of the Amazon Web Services account that you want information about. You
   *             can get the ID from the <a>ListAccounts</a> or <a>ListAccountsForParent</a> operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountResponse {
  /**
   * <p>A structure that contains information about the requested account.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the API response will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Account?: Account | undefined;
}

/**
 * <p>We can't find an create account request with the <code>CreateAccountRequestId</code>
 *             that you specified.</p>
 * @public
 */
export class CreateAccountStatusNotFoundException extends __BaseException {
  readonly name: "CreateAccountStatusNotFoundException" = "CreateAccountStatusNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DescribeCreateAccountStatusRequest {
  /**
   * <p>Specifies the <code>Id</code> value that uniquely identifies the
   *                 <code>CreateAccount</code> request. You can get the value from the
   *                 <code>CreateAccountStatus.Id</code> response in an earlier <a>CreateAccount</a> request, or from the <a>ListCreateAccountStatus</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a create account request ID string
   *     requires "car-" followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  CreateAccountRequestId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCreateAccountStatusResponse {
  /**
   * <p>A structure that contains the current status of an account creation request.</p>
   * @public
   */
  CreateAccountStatus?: CreateAccountStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const EffectivePolicyType = {
  AISERVICES_OPT_OUT_POLICY: "AISERVICES_OPT_OUT_POLICY",
  BACKUP_POLICY: "BACKUP_POLICY",
  CHATBOT_POLICY: "CHATBOT_POLICY",
  DECLARATIVE_POLICY_EC2: "DECLARATIVE_POLICY_EC2",
  SECURITYHUB_POLICY: "SECURITYHUB_POLICY",
  TAG_POLICY: "TAG_POLICY",
} as const;

/**
 * @public
 */
export type EffectivePolicyType = (typeof EffectivePolicyType)[keyof typeof EffectivePolicyType];

/**
 * @public
 */
export interface DescribeEffectivePolicyRequest {
  /**
   * <p>The type of policy that you want information about. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * <p>When you're signed in as the management account, specify the ID of the account that
   *             you want details about. Specifying an organization root or organizational unit (OU) as
   *             the target is not supported.</p>
   * @public
   */
  TargetId?: string | undefined;
}

/**
 * <p>Contains rules to be applied to the affected accounts. The effective policy is the
 *             aggregation of any policies the account inherits, plus any policy directly attached to
 *             the account.</p>
 * @public
 */
export interface EffectivePolicy {
  /**
   * <p>The text content of the policy.</p>
   * @public
   */
  PolicyContent?: string | undefined;

  /**
   * <p>The time of the last update to this policy.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The account ID of the policy target. </p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The policy type.</p>
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;
}

/**
 * @public
 */
export interface DescribeEffectivePolicyResponse {
  /**
   * <p>The contents of the effective policy.</p>
   * @public
   */
  EffectivePolicy?: EffectivePolicy | undefined;
}

/**
 * <p>If you ran this action on the management account, this policy type is not enabled. If
 *             you ran the action on a member account, the account doesn't have an effective policy of
 *             this type. Contact the administrator of your organization about attaching a policy of
 *             this type to the account. </p>
 * @public
 */
export class EffectivePolicyNotFoundException extends __BaseException {
  readonly name: "EffectivePolicyNotFoundException" = "EffectivePolicyNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DescribeHandshakeRequest {
  /**
   * <p>The unique identifier (ID) of the handshake that you want information about. You can
   *             get the ID from the original call to <a>InviteAccountToOrganization</a>, or
   *             from a call to <a>ListHandshakesForAccount</a> or <a>ListHandshakesForOrganization</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  HandshakeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResponse {
  /**
   * <p>A structure that contains information about the organization.</p>
   *          <important>
   *             <p>The <code>AvailablePolicyTypes</code> part of the response is deprecated, and you
   *                 shouldn't use it in your apps. It doesn't include any policy type supported by Organizations
   *                 other than SCPs. In the China (Ningxia) Region, no policy type is included. To
   *                 determine which policy types are enabled in your organization, use the <code>
   *                   <a>ListRoots</a>
   *                </code> operation.</p>
   *          </important>
   * @public
   */
  Organization?: Organization | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationalUnitRequest {
  /**
   * <p>The unique identifier (ID) of the organizational unit that you want details about. You
   *             can get the ID from the <a>ListOrganizationalUnitsForParent</a>
   *             operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  OrganizationalUnitId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationalUnitResponse {
  /**
   * <p>A structure that contains details about the specified OU.</p>
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface DescribePolicyRequest {
  /**
   * <p>The unique identifier (ID) of the policy that you want details about. You can get the
   *             ID from the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DescribePolicyResponse {
  /**
   * <p>A structure that contains details about the specified policy.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * <p>A structure that contains resource policy ID and Amazon Resource Name (ARN).</p>
 * @public
 */
export interface ResourcePolicySummary {
  /**
   * <p>The unique identifier (ID) of the resource policy.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource policy.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>A structure that contains details about a resource policy.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>A structure that contains resource policy ID and Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourcePolicySummary?: ResourcePolicySummary | undefined;

  /**
   * <p>The policy text of the resource policy.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * <p>A structure that contains details about the resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * <p>The unique identifier (ID) of the policy you want to detach. You can get the ID from
   *             the <a>ListPolicies</a> or <a>ListPoliciesForTarget</a>
   *             operations.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root, OU, or account that you want to detach the
   *             policy from. You can get the ID from the <a>ListRoots</a>, <a>ListOrganizationalUnitsForParent</a>, or <a>ListAccounts</a>
   *             operations.</p>
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
   * @public
   */
  TargetId: string | undefined;
}

/**
 * <p>The policy isn't attached to the specified target in the specified root.</p>
 * @public
 */
export class PolicyNotAttachedException extends __BaseException {
  readonly name: "PolicyNotAttachedException" = "PolicyNotAttachedException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DisableAWSServiceAccessRequest {
  /**
   * <p>The service principal name of the Amazon Web Services service for which you want to disable
   *             integration with your organization. This is typically in the form of a URL, such as
   *                     <code>
   *                <i>service-abbreviation</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface DisablePolicyTypeRequest {
  /**
   * <p>The unique identifier (ID) of the root in which you want to disable a policy type. You
   *             can get the ID from the <a>ListRoots</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   * @public
   */
  RootId: string | undefined;

  /**
   * <p>The policy type that you want to disable in this root. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * <p>Contains details about a root. A root is a top-level parent node in the hierarchy of
 *             an organization that can contain organizational units (OUs) and accounts.
 *             The root contains every Amazon Web Services account in the
 *             organization.</p>
 * @public
 */
export interface Root {
  /**
   * <p>The unique identifier (ID) for the root. The ID is unique to the organization
   *             only.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the root.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of the root.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The types of policies that are currently enabled for the root and therefore can be
   *             attached to the root or to its OUs or accounts.</p>
   *          <note>
   *             <p>Even if a policy type is shown as available in the organization, you can
   *                 separately enable and disable them at the root level by using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. Use <a>DescribeOrganization</a> to see the availability of the policy types in
   *                 that organization.</p>
   *          </note>
   * @public
   */
  PolicyTypes?: PolicyTypeSummary[] | undefined;
}

/**
 * @public
 */
export interface DisablePolicyTypeResponse {
  /**
   * <p>A structure that shows the root with the updated list of enabled policy types.</p>
   * @public
   */
  Root?: Root | undefined;
}

/**
 * <p>We can't find a root with the <code>RootId</code> that you specified.</p>
 * @public
 */
export class RootNotFoundException extends __BaseException {
  readonly name: "RootNotFoundException" = "RootNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface EnableAllFeaturesRequest {}

/**
 * @public
 */
export interface EnableAWSServiceAccessRequest {
  /**
   * <p>The service principal name of the Amazon Web Services service for which you want to enable
   *             integration with your organization. This is typically in the form of a URL, such as
   *                     <code>
   *                <i>service-abbreviation</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface EnablePolicyTypeRequest {
  /**
   * <p>The unique identifier (ID) of the root in which you want to enable a policy type. You
   *             can get the ID from the <a>ListRoots</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a root ID string requires "r-" followed by
   *     from 4 to 32 lowercase letters or digits.</p>
   * @public
   */
  RootId: string | undefined;

  /**
   * <p>The policy type that you want to enable. You can specify one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: PolicyType | undefined;
}

/**
 * @public
 */
export interface EnablePolicyTypeResponse {
  /**
   * <p>A structure that shows the root with the updated list of enabled policy types.</p>
   * @public
   */
  Root?: Root | undefined;
}

/**
 * <p>The specified policy type is already enabled in the specified root.</p>
 * @public
 */
export class PolicyTypeAlreadyEnabledException extends __BaseException {
  readonly name: "PolicyTypeAlreadyEnabledException" = "PolicyTypeAlreadyEnabledException";
  readonly $fault: "client" = "client";
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
  readonly name: "DuplicateHandshakeException" = "DuplicateHandshakeException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface InviteAccountToOrganizationRequest {
  /**
   * <p>The identifier (ID) of the Amazon Web Services account that you want to invite to join your
   *             organization. This is a JSON object that contains the following elements:</p>
   *          <p>
   *             <code>\{ "Type": "ACCOUNT", "Id": "<<i>
   *                   <b>account id
   *                         number</b>
   *                </i>>" \}</code>
   *          </p>
   *          <p>If you use the CLI, you can submit this as a single string, similar to the following
   *             example:</p>
   *          <p>
   *             <code>--target Id=123456789012,Type=ACCOUNT</code>
   *          </p>
   *          <p>If you specify <code>"Type": "ACCOUNT"</code>, you must provide the Amazon Web Services account ID
   *             number as the <code>Id</code>. If you specify <code>"Type": "EMAIL"</code>, you must
   *             specify the email address that is associated with the account.</p>
   *          <p>
   *             <code>--target Id=diego@example.com,Type=EMAIL</code>
   *          </p>
   * @public
   */
  Target: HandshakeParty | undefined;

  /**
   * <p>Additional information that you want to include in the generated email to the
   *             recipient account owner.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the account when it becomes a member of the
   *             organization. For each tag in the list, you must specify both a tag key and a value. You
   *             can set the value to an empty string, but you can't set it to <code>null</code>. For
   *             more information about tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging Organizations resources</a> in the
   *             Organizations User Guide.</p>
   *          <important>
   *             <p>Any tags in the request are checked for compliance with any applicable tag
   *                 policies when the request is made. The request is rejected if the tags in the
   *                 request don't match the requirements of the policy at that time. Tag policy
   *                 compliance is <i>
   *                   <b>not</b>
   *                </i> checked
   *                 again when the invitation is accepted and the tags are actually attached to the
   *                 account. That means that if the tag policy changes between the invitation and the
   *                 acceptance, then that tags could potentially be non-compliant.</p>
   *          </important>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the allowed number of tags
   *                 for an account, then the entire request fails and invitations are not sent.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>You can't remove a management account from an organization. If you want the management
 *             account to become a member account in another organization, you must first delete the
 *             current organization of the management account.</p>
 * @public
 */
export class MasterCannotLeaveOrganizationException extends __BaseException {
  readonly name: "MasterCannotLeaveOrganizationException" = "MasterCannotLeaveOrganizationException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface ListAccountsRequest {
  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * <p>A list of objects in the organization.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the API response will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsForParentRequest {
  /**
   * <p>The unique identifier (ID) for the parent root or organization unit (OU) whose
   *             accounts you want to list.</p>
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsForParentResponse {
  /**
   * <p>A list of the accounts in the specified root or OU.</p>
   *          <important>
   *             <p>The <code>Status</code> parameter in the API response will be retired on September 9, 2026.
   *                 Although both the account <code>State</code> and account <code>Status</code> parameters are currently
   *                 available in the Organizations APIs (<code>DescribeAccount</code>, <code>ListAccounts</code>,
   *                 <code>ListAccountsForParent</code>), we recommend that you update your scripts or other code to
   *                 use the <code>State</code> parameter instead of <code>Status</code> before September 9, 2026.</p>
   *          </important>
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsWithInvalidEffectivePolicyRequest {
  /**
   * <p>The type of policy that you want information about. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsWithInvalidEffectivePolicyResponse {
  /**
   * <p>The accounts in the organization which have an invalid effective policy for the specified policy type.</p>
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * <p>The specified policy type. One of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAWSServiceAccessForOrganizationRequest {
  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure that contains details of a service principal that represents an Amazon Web Services
 *             service that is enabled to integrate with Organizations.</p>
 * @public
 */
export interface EnabledServicePrincipal {
  /**
   * <p>The name of the service principal. This is typically in the form of a URL, such as:
   *                     <code>
   *                <i>servicename</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The date that the service principal was enabled for integration with Organizations.</p>
   * @public
   */
  DateEnabled?: Date | undefined;
}

/**
 * @public
 */
export interface ListAWSServiceAccessForOrganizationResponse {
  /**
   * <p>A list of the service principals for the services that are enabled to integrate with
   *             your organization. Each principal is a structure that includes the name and the date
   *             that it was enabled for integration with Organizations.</p>
   * @public
   */
  EnabledServicePrincipals?: EnabledServicePrincipal[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChildType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
} as const;

/**
 * @public
 */
export type ChildType = (typeof ChildType)[keyof typeof ChildType];

/**
 * @public
 */
export interface ListChildrenRequest {
  /**
   * <p>The unique identifier (ID) for the parent root or OU whose children you want to
   *             list.</p>
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
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>Filters the output to include only the specified child type.</p>
   * @public
   */
  ChildType: ChildType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains a list of child entities, either OUs or accounts.</p>
 * @public
 */
export interface Child {
  /**
   * <p>The unique identifier (ID) of this child entity.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with
   *           "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that
   *           contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional
   *           lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of this child entity.</p>
   * @public
   */
  Type?: ChildType | undefined;
}

/**
 * @public
 */
export interface ListChildrenResponse {
  /**
   * <p>The list of children of the specified parent container.</p>
   * @public
   */
  Children?: Child[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCreateAccountStatusRequest {
  /**
   * <p>A list of one or more states that you want included in the response. If this parameter
   *             isn't present, all requests are included in the response.</p>
   * @public
   */
  States?: CreateAccountState[] | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCreateAccountStatusResponse {
  /**
   * <p>A list of objects with details about the requests. Certain elements, such as the
   *             accountId number, are present in the output only after the account has been successfully
   *             created.</p>
   * @public
   */
  CreateAccountStatuses?: CreateAccountStatus[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdministratorsRequest {
  /**
   * <p>Specifies a service principal name. If specified, then the operation lists the
   *             delegated administrators only for the specified service.</p>
   *          <p>If you don't specify a service principal, the operation lists all delegated
   *             administrators for all services in your organization.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about the delegated administrator.</p>
 * @public
 */
export interface DelegatedAdministrator {
  /**
   * <p>The unique identifier (ID) of the delegated administrator's account.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delegated administrator's account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The email address that is associated with the delegated administrator's Amazon Web Services
   *             account.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The friendly name of the delegated administrator's account.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the delegated administrator's account in the organization.</p>
   * @public
   */
  Status?: AccountStatus | undefined;

  /**
   * <p>The method by which the delegated administrator's account joined the
   *             organization.</p>
   * @public
   */
  JoinedMethod?: AccountJoinedMethod | undefined;

  /**
   * <p>The date when the delegated administrator's account became a part of the
   *             organization.</p>
   * @public
   */
  JoinedTimestamp?: Date | undefined;

  /**
   * <p>The date when the account was made a delegated administrator.</p>
   * @public
   */
  DelegationEnabledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDelegatedAdministratorsResponse {
  /**
   * <p>The list of delegated administrators in your organization.</p>
   * @public
   */
  DelegatedAdministrators?: DelegatedAdministrator[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDelegatedServicesForAccountRequest {
  /**
   * <p>The account ID number of a delegated administrator account in the organization.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about the Amazon Web Services service for which the account is a delegated
 *             administrator.</p>
 * @public
 */
export interface DelegatedService {
  /**
   * <p>The name of an Amazon Web Services service that can request an operation for the specified service.
   *             This is typically in the form of a URL, such as:
   *                 <code>
   *                <i>servicename</i>.amazonaws.com</code>.</p>
   * @public
   */
  ServicePrincipal?: string | undefined;

  /**
   * <p>The date that the account became a delegated administrator for this service. </p>
   * @public
   */
  DelegationEnabledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDelegatedServicesForAccountResponse {
  /**
   * <p>The services for which the account is a delegated administrator.</p>
   * @public
   */
  DelegatedServices?: DelegatedService[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEffectivePolicyValidationErrorsRequest {
  /**
   * <p>The ID of the account that you want details about. Specifying an organization root or
   *             organizational unit (OU) as the target is not supported.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The type of policy that you want information about. You can specify one of the
   *             following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType: EffectivePolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains details about the validation errors that occurred when generating or
 *             enforcing an <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_effective.html">effective
 *                 policy</a>, such as which policies contributed to the error and location of the
 *             error.</p>
 * @public
 */
export interface EffectivePolicyValidationError {
  /**
   * <p>The error code for the validation error. For example,
   *             <code>ELEMENTS_TOO_MANY</code>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message for the validation error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The path within the effective policy where the validation error occurred.</p>
   * @public
   */
  PathToError?: string | undefined;

  /**
   * <p>The individual policies <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_mgmt.html">inherited</a> and <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_policies_attach.html">attached</a> to
   *             the account which contributed to the validation error.</p>
   * @public
   */
  ContributingPolicies?: string[] | undefined;
}

/**
 * @public
 */
export interface ListEffectivePolicyValidationErrorsResponse {
  /**
   * <p>The ID of the specified account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The specified policy type. One of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyType?: EffectivePolicyType | undefined;

  /**
   * <p>The path in the organization where the specified account exists.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The time when the latest effective policy was generated for the specified
   *             account.</p>
   * @public
   */
  EvaluationTimestamp?: Date | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>EffectivePolicyValidationError</code> object contains details about the
   *             validation errors that occurred when generating or enforcing an effective policy, such
   *             as which policies contributed to the error and location of the error.</p>
   * @public
   */
  EffectivePolicyValidationErrors?: EffectivePolicyValidationError[] | undefined;
}

/**
 * <p>Specifies the criteria that are used to select the handshakes for the
 *             operation.</p>
 * @public
 */
export interface HandshakeFilter {
  /**
   * <p>Specifies the type of handshake action.</p>
   *          <p>If you specify <code>ActionType</code>, you cannot also specify
   *                 <code>ParentHandshakeId</code>.</p>
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * <p>Specifies the parent handshake. Only used for handshake types that are a child of
   *             another type.</p>
   *          <p>If you specify <code>ParentHandshakeId</code>, you cannot also specify
   *                 <code>ActionType</code>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  ParentHandshakeId?: string | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForAccountRequest {
  /**
   * <p>Filters the handshakes that you want included in the response. The default is all
   *             types. Use the <code>ActionType</code> element to limit the output to only a specified
   *             type, such as <code>INVITE</code>, <code>ENABLE_ALL_FEATURES</code>, or
   *                 <code>APPROVE_ALL_FEATURES</code>. Alternatively, for the
   *                 <code>ENABLE_ALL_FEATURES</code> handshake that generates a separate child handshake
   *             for each member account, you can specify <code>ParentHandshakeId</code> to see only the
   *             handshakes that were generated by that parent request.</p>
   * @public
   */
  Filter?: HandshakeFilter | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForOrganizationRequest {
  /**
   * <p>A filter of the handshakes that you want included in the response. The default is all
   *             types. Use the <code>ActionType</code> element to limit the output to only a specified
   *             type, such as <code>INVITE</code>, <code>ENABLE-ALL-FEATURES</code>, or
   *                 <code>APPROVE-ALL-FEATURES</code>. Alternatively, for the
   *                 <code>ENABLE-ALL-FEATURES</code> handshake that generates a separate child handshake
   *             for each member account, you can specify the <code>ParentHandshakeId</code> to see only
   *             the handshakes that were generated by that parent request.</p>
   * @public
   */
  Filter?: HandshakeFilter | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsForParentRequest {
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
   * @public
   */
  ParentId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsForParentResponse {
  /**
   * <p>A list of the OUs in the specified root or parent OU.</p>
   * @public
   */
  OrganizationalUnits?: OrganizationalUnit[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>We can't find an organizational unit (OU) or Amazon Web Services account with the
 *                 <code>ChildId</code> that you specified.</p>
 * @public
 */
export class ChildNotFoundException extends __BaseException {
  readonly name: "ChildNotFoundException" = "ChildNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface ListParentsRequest {
  /**
   * <p>The unique identifier (ID) of the OU or account whose parent containers you want to
   *             list. Don't specify a root.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a child ID string requires one of the
   *     following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Account</b> - A string that consists of exactly 12 digits.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Organizational unit (OU)</b> - A string that begins with
   *           "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that
   *           contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional
   *           lowercase letters or digits.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ChildId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ParentType = {
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
  ROOT: "ROOT",
} as const;

/**
 * @public
 */
export type ParentType = (typeof ParentType)[keyof typeof ParentType];

/**
 * <p>Contains information about either a root or an organizational unit (OU) that can
 *             contain OUs or accounts in an organization.</p>
 * @public
 */
export interface Parent {
  /**
   * <p>The unique identifier (ID) of the parent entity.</p>
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
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the parent entity.</p>
   * @public
   */
  Type?: ParentType | undefined;
}

/**
 * @public
 */
export interface ListParentsResponse {
  /**
   * <p>A list of parents for the specified child account or OU.</p>
   * @public
   */
  Parents?: Parent[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>Specifies the type of policy that you want to include in the response. You must
   *             specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter: PolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>A list of policies that match the filter criteria in the request. The output list
   *             doesn't include the policy contents. To see the content for a policy, see <a>DescribePolicy</a>.</p>
   * @public
   */
  Policies?: PolicySummary[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesForTargetRequest {
  /**
   * <p>The unique identifier (ID) of the root, organizational unit, or account whose policies
   *             you want to list.</p>
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
   * @public
   */
  TargetId: string | undefined;

  /**
   * <p>The type of policy that you want to include in the returned list. You must specify one
   *             of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">SERVICE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html">RESOURCE_CONTROL_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html">DECLARATIVE_POLICY_EC2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html">BACKUP_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">TAG_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html">CHATBOT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html">AISERVICES_OPT_OUT_POLICY</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_security_hub.html">SECURITYHUB_POLICY</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter: PolicyType | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPoliciesForTargetResponse {
  /**
   * <p>The list of policies that match the criteria in the request.</p>
   * @public
   */
  Policies?: PolicySummary[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRootsRequest {
  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRootsResponse {
  /**
   * <p>A list of roots that are defined in an organization.</p>
   * @public
   */
  Roots?: Root[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ID of the resource with the tags to list.</p>
   *          <p>You can specify any of the following taggable resources.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services account – specify the account ID number.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit  – specify the OU ID that begins with <code>ou-</code> and
   *                     looks similar to: <code>ou-<i>1a2b-34uvwxyz</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Root – specify the root ID that begins with <code>r-</code> and looks similar
   *                     to: <code>r-<i>1a2b</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks
   *                     similar to: <code>p-<i>12abcdefg3</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyRequest {
  /**
   * <p>The unique identifier (ID) of the policy whose attachments you want to know.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The parameter for receiving additional results if you receive a
   *     <code>NextToken</code> response in a previous request. A <code>NextToken</code> response
   *     indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of results that you want included on each page of the
   *     response. If you do not include this parameter, it defaults to a value that is specific to the
   *     operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code>
   *     response element is present and has a value (is not null). Include that value as the
   *     <code>NextToken</code> request parameter in the next call to the operation to get the next part
   *     of the results. Note that Organizations might return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
  ROOT: "ROOT",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * <p>Contains information about a root, OU, or account that a policy is attached to.</p>
 * @public
 */
export interface PolicyTargetSummary {
  /**
   * <p>The unique identifier (ID) of the policy target.</p>
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
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy target.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The friendly name of the policy target.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the policy target.</p>
   * @public
   */
  Type?: TargetType | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyResponse {
  /**
   * <p>A list of structures, each of which contains details about one of the entities to
   *             which the specified policy is attached.</p>
   * @public
   */
  Targets?: PolicyTargetSummary[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>We can't find the destination container (a root or OU) with the <code>ParentId</code>
 *             that you specified.</p>
 * @public
 */
export class DestinationParentNotFoundException extends __BaseException {
  readonly name: "DestinationParentNotFoundException" = "DestinationParentNotFoundException";
  readonly $fault: "client" = "client";
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
  readonly name: "DuplicateAccountException" = "DuplicateAccountException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface MoveAccountRequest {
  /**
   * <p>The unique identifier (ID) of the account that you want to move.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root or organizational unit that you want to move
   *             the account from.</p>
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
   * @public
   */
  SourceParentId: string | undefined;

  /**
   * <p>The unique identifier (ID) of the root or organizational unit that you want to move
   *             the account to.</p>
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
   * @public
   */
  DestinationParentId: string | undefined;
}

/**
 * <p>We can't find a source root or OU with the <code>ParentId</code> that you
 *             specified.</p>
 * @public
 */
export class SourceParentNotFoundException extends __BaseException {
  readonly name: "SourceParentNotFoundException" = "SourceParentNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>If provided, the new content for the resource policy. The text must be correctly
   *             formatted JSON that complies with the syntax for the resource policy's type. For more
   *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html">SCP syntax</a> in the
   *             <i>Organizations User Guide</i>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created resource policy. For each
   *             tag in the list, you must specify both a tag key and a value. You can set the value to
   *             an empty string, but you can't set it to <code>null</code>. For more information about
   *             tagging, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html">Tagging
   *                 Organizations resources</a> in the Organizations User Guide.</p>
   *          <note>
   *             <p>Calls with tags apply to the initial creation of the resource policy, otherwise an
   *                 exception is thrown. If any one of the tags is not valid or if you exceed the
   *                 allowed number of tags for the resource policy, then the entire request fails and
   *                 the resource policy is not created. </p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>A structure that contains details about the resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface RegisterDelegatedAdministratorRequest {
  /**
   * <p>The account ID number of the member account in the organization to register as a
   *             delegated administrator.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The service principal of the Amazon Web Services service for which you want to make the member
   *             account a delegated administrator.</p>
   * @public
   */
  ServicePrincipal: string | undefined;
}

/**
 * @public
 */
export interface RemoveAccountFromOrganizationRequest {
  /**
   * <p>The unique identifier (ID) of the member account that you want to remove from the
   *             organization.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12
   *     digits.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ID of the resource to add a tag to.</p>
   *          <p>You can specify any of the following taggable resources.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services account – specify the account ID number.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit  – specify the OU ID that begins with <code>ou-</code> and
   *                     looks similar to: <code>ou-<i>1a2b-34uvwxyz</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Root – specify the root ID that begins with <code>r-</code> and looks similar
   *                     to: <code>r-<i>1a2b</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks
   *                     similar to: <code>p-<i>12abcdefg3</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of tags to add to the specified resource.</p>
   *          <p>For each tag in the list, you must specify both a tag key and a value. The value can
   *             be an empty string, but you can't set it to <code>null</code>.</p>
   *          <note>
   *             <p>If any one of the tags is not valid or if you exceed the maximum allowed number of
   *                 tags for a resource, then the entire request fails.</p>
   *          </note>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ID of the resource to remove a tag from.</p>
   *          <p>You can specify any of the following taggable resources.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services account – specify the account ID number.</p>
   *             </li>
   *             <li>
   *                <p>Organizational unit  – specify the OU ID that begins with <code>ou-</code> and
   *                     looks similar to: <code>ou-<i>1a2b-34uvwxyz</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Root – specify the root ID that begins with <code>r-</code> and looks similar
   *                     to: <code>r-<i>1a2b</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Policy – specify the policy ID that begins with <code>p-</code> andlooks
   *                     similar to: <code>p-<i>12abcdefg3</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The list of keys for tags to remove from the specified resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationalUnitRequest {
  /**
   * <p>The unique identifier (ID) of the OU that you want to rename. You can get the ID from
   *             the <a>ListOrganizationalUnitsForParent</a> operation.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires
   *     "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the
   *     OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters
   *     or digits.</p>
   * @public
   */
  OrganizationalUnitId: string | undefined;

  /**
   * <p>The new name that you want to assign to the OU.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationalUnitResponse {
  /**
   * <p>A structure that contains the details about the specified OU, including its new
   *             name.</p>
   * @public
   */
  OrganizationalUnit?: OrganizationalUnit | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyRequest {
  /**
   * <p>The unique identifier (ID) of the policy that you want to update.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed
   *     by from 8 to 128 lowercase or uppercase letters, digits, or the underscore character (_).</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>If provided, the new name for the policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of any of the characters in the ASCII
   *     character range.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>If provided, the new description for the policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>If provided, the new content for the policy. The text must be correctly formatted JSON
   *             that complies with the syntax for the policy's type. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html">SCP
   *                 syntax</a> in the <i>Organizations User Guide</i>.</p>
   *          <p>The maximum size of a policy document depends on the policy's type. For more
   *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html#min-max-values">Maximum and minimum values</a> in the
   *             <i>Organizations User Guide</i>.</p>
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyResponse {
  /**
   * <p>A structure that contains details about the updated policy, showing the requested
   *             changes.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * <p>Contains additional data that is needed to process a handshake.</p>
 * @public
 */
export interface HandshakeResource {
  /**
   * <p>The information that is passed to the other party in the handshake. The format of the
   *             value string must match the requirements of the specified type.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The type of information being passed, specifying how the value is to be interpreted by
   *             the other party:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT</code> - Specifies an Amazon Web Services account ID number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ORGANIZATION</code> - Specifies an organization ID number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL</code> - Specifies the email address that is associated with the
   *                     account that receives the handshake. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OWNER_EMAIL</code> - Specifies the email address associated with the
   *                     management account. Included as information about an organization. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OWNER_NAME</code> - Specifies the name associated with the management
   *                     account. Included as information about an organization. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTES</code> - Additional text provided by the handshake initiator and
   *                     intended for the recipient to read.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: HandshakeResourceType | undefined;

  /**
   * <p>When needed, contains an additional array of <code>HandshakeResource</code>
   *             objects.</p>
   * @public
   */
  Resources?: HandshakeResource[] | undefined;
}

/**
 * <p>Contains information that must be exchanged to securely establish a relationship
 *             between two accounts (an <i>originator</i> and a
 *                 <i>recipient</i>). For example, when a management account (the
 *             originator) invites another account (the recipient) to join its organization, the two
 *             accounts exchange information as a series of handshake requests and responses.</p>
 *          <p>
 *             <b>Note:</b> Handshakes that are <code>CANCELED</code>,
 *                 <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>EXPIRED</code> show up in
 *             lists for only 30 days after entering that state After that they are deleted.</p>
 * @public
 */
export interface Handshake {
  /**
   * <p>The unique identifier (ID) of a handshake. The originating account creates the ID when
   *             it initiates the handshake.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for  handshake ID string requires "h-"
   *     followed by from 8 to 32 lowercase letters or digits.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a handshake.</p>
   *          <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html#awsorganizations-resources-for-iam-policies">ARN
   *     Formats Supported by Organizations</a> in the <i>Amazon Web Services Service Authorization Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Information about the two accounts that are participating in the handshake.</p>
   * @public
   */
  Parties?: HandshakeParty[] | undefined;

  /**
   * <p>The current state of the handshake. Use the state to trace the flow of the handshake
   *             through the process from its creation to its acceptance. The meaning of each of the
   *             valid values is as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>REQUESTED</b>: This handshake was sent to
   *                     multiple recipients (applicable to only some handshake types) and not all
   *                     recipients have responded yet. The request stays in this state until all
   *                     recipients respond.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OPEN</b>: This handshake was sent to multiple
   *                     recipients (applicable to only some policy types) and all recipients have
   *                     responded, allowing the originator to complete the handshake action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELED</b>: This handshake is no longer active
   *                     because it was canceled by the originating account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACCEPTED</b>: This handshake is complete because
   *                     it has been accepted by the recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DECLINED</b>: This handshake is no longer active
   *                     because it was declined by the recipient account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EXPIRED</b>: This handshake is no longer active
   *                     because the originator did not receive a response of any kind from the recipient
   *                     before the expiration time (15 days).</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: HandshakeState | undefined;

  /**
   * <p>The date and time that the handshake request was made.</p>
   * @public
   */
  RequestedTimestamp?: Date | undefined;

  /**
   * <p>The date and time that the handshake expires. If the recipient of the handshake
   *             request fails to respond before the specified date and time, the handshake becomes
   *             inactive and is no longer valid.</p>
   * @public
   */
  ExpirationTimestamp?: Date | undefined;

  /**
   * <p>The type of handshake, indicating what action occurs when the recipient accepts the
   *             handshake. The following handshake types are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>INVITE</b>: This type of handshake represents a
   *                     request to join an organization. It is always sent from the management account
   *                     to only non-member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ENABLE_ALL_FEATURES</b>: This type of handshake
   *                     represents a request to enable all features in an organization. It is always
   *                     sent from the management account to only <i>invited</i> member
   *                     accounts. Created accounts do not receive this because those accounts were
   *                     created by the organization's management account and approval is
   *                     inferred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>APPROVE_ALL_FEATURES</b>: This type of handshake
   *                     is sent from the Organizations service when all member accounts have approved the
   *                         <code>ENABLE_ALL_FEATURES</code> invitation. It is sent only to the
   *                     management account and signals the master that it can finalize the process to
   *                     enable all features.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Action?: ActionType | undefined;

  /**
   * <p>Additional information that is needed to process the handshake.</p>
   * @public
   */
  Resources?: HandshakeResource[] | undefined;
}

/**
 * @public
 */
export interface AcceptHandshakeResponse {
  /**
   * <p>A structure that contains details about the accepted handshake.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface CancelHandshakeResponse {
  /**
   * <p>A structure that contains details about the handshake that you canceled.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface DeclineHandshakeResponse {
  /**
   * <p>A structure that contains details about the declined handshake. The state is updated
   *             to show the value <code>DECLINED</code>.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface DescribeHandshakeResponse {
  /**
   * <p>A structure that contains information about the specified handshake.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface EnableAllFeaturesResponse {
  /**
   * <p>A structure that contains details about the handshake created to support this request
   *             to enable all features in the organization.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface InviteAccountToOrganizationResponse {
  /**
   * <p>A structure that contains details about the handshake that is created to support this
   *             invitation request.</p>
   * @public
   */
  Handshake?: Handshake | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForAccountResponse {
  /**
   * <p>A list of <a>Handshake</a> objects with details about each of the
   *             handshakes that is associated with the specified account.</p>
   * @public
   */
  Handshakes?: Handshake[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHandshakesForOrganizationResponse {
  /**
   * <p>A list of <a>Handshake</a> objects with details about each of the
   *             handshakes that are associated with an organization.</p>
   * @public
   */
  Handshakes?: Handshake[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}
