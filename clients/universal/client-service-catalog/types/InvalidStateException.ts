import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An attempt was made to modify a resource that is in a state that is not valid. Check your resources to ensure that they are in valid states before retrying the operation.</p>
 */
export interface InvalidStateException
  extends __ServiceException__<_InvalidStateExceptionDetails> {
  name: "InvalidStateException";
}

export interface _InvalidStateExceptionDetails {}
