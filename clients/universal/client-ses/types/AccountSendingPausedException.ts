import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that email sending is disabled for your entire Amazon SES account.</p> <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
 */
export interface AccountSendingPausedException
  extends __ServiceException__<_AccountSendingPausedExceptionDetails> {
  name: "AccountSendingPausedException";
}

export interface _AccountSendingPausedExceptionDetails {}
