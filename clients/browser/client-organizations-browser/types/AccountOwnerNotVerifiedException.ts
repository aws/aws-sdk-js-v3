import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't invite an existing account to your organization until you verify that you own the email address associated with the master account. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_create.html#about-email-verification">Email Address Verification</a> in the <i>AWS Organizations User Guide.</i> </p>
 */
export interface AccountOwnerNotVerifiedException
  extends __ServiceException__<_AccountOwnerNotVerifiedExceptionDetails> {
  name: "AccountOwnerNotVerifiedException";
}

export interface _AccountOwnerNotVerifiedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
