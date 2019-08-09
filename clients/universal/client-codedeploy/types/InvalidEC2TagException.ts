import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tag was specified in an invalid format.</p>
 */
export interface InvalidEC2TagException
  extends __ServiceException__<_InvalidEC2TagExceptionDetails> {
  name: "InvalidEC2TagException";
}

export interface _InvalidEC2TagExceptionDetails {}
