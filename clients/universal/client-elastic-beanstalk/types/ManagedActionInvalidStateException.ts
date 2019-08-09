import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cannot modify the managed action in its current state.</p>
 */
export interface ManagedActionInvalidStateException
  extends __ServiceException__<_ManagedActionInvalidStateExceptionDetails> {
  name: "ManagedActionInvalidStateException";
}

export interface _ManagedActionInvalidStateExceptionDetails {}
