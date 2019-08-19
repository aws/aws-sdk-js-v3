import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The SSML you provided is invalid. Verify the SSML syntax, spelling of tags and values, and then try again.</p>
 */
export interface InvalidSsmlException
  extends __ServiceException__<_InvalidSsmlExceptionDetails> {
  name: "InvalidSsmlException";
}

export interface _InvalidSsmlExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
