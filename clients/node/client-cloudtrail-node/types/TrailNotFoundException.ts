import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the trail with the given name is not found.</p>
 */
export interface TrailNotFoundException
  extends __ServiceException__<_TrailNotFoundExceptionDetails> {
  name: "TrailNotFoundException";
}

export interface _TrailNotFoundExceptionDetails {}
