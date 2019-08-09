import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The connection with the provided id no longer exists.</p>
 */
export interface GoneException
  extends __ServiceException__<_GoneExceptionDetails> {
  name: "GoneException";
}

export interface _GoneExceptionDetails {}
