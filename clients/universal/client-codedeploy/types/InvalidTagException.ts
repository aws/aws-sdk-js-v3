import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tag was specified in an invalid format.</p>
 */
export interface InvalidTagException
  extends __ServiceException__<_InvalidTagExceptionDetails> {
  name: "InvalidTagException";
}

export interface _InvalidTagExceptionDetails {}
