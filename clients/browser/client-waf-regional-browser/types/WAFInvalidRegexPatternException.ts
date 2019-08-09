import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The regular expression (regex) you specified in <code>RegexPatternString</code> is invalid.</p>
 */
export interface WAFInvalidRegexPatternException
  extends __ServiceException__<_WAFInvalidRegexPatternExceptionDetails> {
  name: "WAFInvalidRegexPatternException";
}

export interface _WAFInvalidRegexPatternExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
