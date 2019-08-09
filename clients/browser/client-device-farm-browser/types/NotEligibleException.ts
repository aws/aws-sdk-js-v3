import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception gets thrown when a user is not eligible to perform the specified transaction.</p>
 */
export interface NotEligibleException
  extends __ServiceException__<_NotEligibleExceptionDetails> {
  name: "NotEligibleException";
}

export interface _NotEligibleExceptionDetails {
  /**
   * <p>The HTTP response code of a Not Eligible exception.</p>
   */
  message?: string;
}
