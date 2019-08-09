import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A conflict occurred.</p>
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {}
