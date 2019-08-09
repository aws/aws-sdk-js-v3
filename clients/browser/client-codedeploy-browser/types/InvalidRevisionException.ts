import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The revision was specified in an invalid format.</p>
 */
export interface InvalidRevisionException
  extends __ServiceException__<_InvalidRevisionExceptionDetails> {
  name: "InvalidRevisionException";
}

export interface _InvalidRevisionExceptionDetails {}
