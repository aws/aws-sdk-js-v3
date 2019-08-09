import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception occurs due to unexpected causes.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {}
