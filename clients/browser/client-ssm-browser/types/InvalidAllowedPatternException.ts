import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request does not meet the regular expression requirement.</p>
 */
export interface InvalidAllowedPatternException
  extends __ServiceException__<_InvalidAllowedPatternExceptionDetails> {
  name: "InvalidAllowedPatternException";
}

export interface _InvalidAllowedPatternExceptionDetails {
  /**
   * <p>The request does not meet the regular expression requirement.</p>
   */
  message?: string;
}
