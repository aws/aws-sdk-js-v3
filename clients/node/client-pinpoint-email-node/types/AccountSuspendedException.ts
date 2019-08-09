import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The message can't be sent because the account's ability to send email has been permanently restricted.</p>
 */
export interface AccountSuspendedException
  extends __ServiceException__<_AccountSuspendedExceptionDetails> {
  name: "AccountSuspendedException";
}

export interface _AccountSuspendedExceptionDetails {}
