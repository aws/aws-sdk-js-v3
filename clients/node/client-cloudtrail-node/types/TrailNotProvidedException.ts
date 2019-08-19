import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is deprecated.</p>
 */
export interface TrailNotProvidedException
  extends __ServiceException__<_TrailNotProvidedExceptionDetails> {
  name: "TrailNotProvidedException";
}

export interface _TrailNotProvidedExceptionDetails {}
