import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The certificate signing request is invalid.</p>
 */
export interface MalformedCSRException
  extends __ServiceException__<_MalformedCSRExceptionDetails> {
  name: "MalformedCSRException";
}

export interface _MalformedCSRExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
