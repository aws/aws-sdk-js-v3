import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Performing this operation violates a minimum or maximum value limit. For example, attempting to remove the last service control policy (SCP) from an OU or root, inviting or creating too many accounts to the organization, or attaching too many policies to an account, OU, or root. This exception includes a reason that contains additional information about the violated limit.</p> <p>Some of the reasons in the following list might not be applicable to this specific API or operation:</p> <ul> <li> <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA: You attempted to remove an account from the organization that doesn't yet have enough information to exist as a standalone account. This account requires you to first agree to the AWS Customer Agreement. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: You attempted to remove an account from the organization that doesn't yet have enough information to exist as a standalone account. This account requires you to first complete phone verification. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of accounts that you can create in one day.</p> </li> <li> <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number of accounts in an organization. If you need more accounts, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a> to request an increase in your limit. </p> <p>Or the number of invitations that you tried to send would cause you to exceed the limit of accounts in your organization. Send fewer invitations or contact AWS Support to request an increase in the number of accounts.</p> <note> <p>Deleted and closed accounts still count toward your limit.</p> </note> <important> <p>If you get receive this exception when running a command immediately after creating the organization, wait one hour and try again. If after an hour it continues to fail with this error, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </important> </li> <li> <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of handshakes that you can send in one day.</p> </li> <li> <p>MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: To create an account in this organization, you first must migrate the organization's master account to the marketplace that corresponds to the master account's address. For example, accounts with India addresses must be associated with the AISPL marketplace. All accounts in an organization must be associated with the same marketplace.</p> </li> <li> <p>MASTER_ACCOUNT_MISSING_CONTACT_INFO: To complete this operation, you must first provide contact a valid address and phone number for the master account. Then try the operation again.</p> </li> <li> <p>MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED: To complete this operation, the master account must have an associated account in the AWS GovCloud (US-West) Region. For more information, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the <i>AWS GovCloud User Guide.</i> </p> </li> <li> <p>MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To create an organization with this master account, you first must associate a valid payment instrument, such as a credit card, with the account. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to exceed the number of policies of a certain type that can be attached to an entity at one time.</p> </li> <li> <p>MAX_TAG_LIMIT_EXCEEDED: You have exceeded the number of tags allowed on this resource. </p> </li> <li> <p>MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To complete this operation with this member account, you first must associate a valid payment instrument, such as a credit card, with the account. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to detach a policy from an entity that would cause the entity to have fewer than the minimum number of policies of a certain type required.</p> </li> <li> <p>OU_DEPTH_LIMIT_EXCEEDED: You attempted to create an OU tree that is too many levels deep.</p> </li> <li> <p>ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: You attempted to perform an operation that requires the organization to be configured to support all features. An organization that supports only consolidated billing features can't perform this operation.</p> </li> <li> <p>OU_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of OUs that you can have in an organization.</p> </li> <li> <p>POLICY_NUMBER_LIMIT_EXCEEDED. You attempted to exceed the number of policies that you can have in an organization.</p> </li> </ul>
 */
export interface ConstraintViolationException
  extends __ServiceException__<_ConstraintViolationExceptionDetails> {
  name: "ConstraintViolationException";
}

export interface _ConstraintViolationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;

  /**
   * _ConstraintViolationExceptionReason shape
   */
  Reason?:
    | "ACCOUNT_NUMBER_LIMIT_EXCEEDED"
    | "HANDSHAKE_RATE_LIMIT_EXCEEDED"
    | "OU_NUMBER_LIMIT_EXCEEDED"
    | "OU_DEPTH_LIMIT_EXCEEDED"
    | "POLICY_NUMBER_LIMIT_EXCEEDED"
    | "MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"
    | "MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"
    | "ACCOUNT_CANNOT_LEAVE_ORGANIZATION"
    | "ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA"
    | "ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION"
    | "MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"
    | "MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"
    | "ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED"
    | "MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE"
    | "MASTER_ACCOUNT_MISSING_CONTACT_INFO"
    | "MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED"
    | "ORGANIZATION_NOT_IN_ALL_FEATURES_MODE"
    | "CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION"
    | "EMAIL_VERIFICATION_CODE_EXPIRED"
    | "WAIT_PERIOD_ACTIVE"
    | "MAX_TAG_LIMIT_EXCEEDED"
    | "TAG_POLICY_VIOLATION"
    | string;
}
