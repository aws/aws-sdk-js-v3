import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the specified trail already exists.</p>
 */
export interface TrailAlreadyExistsException
  extends __ServiceException__<_TrailAlreadyExistsExceptionDetails> {
  name: "TrailAlreadyExistsException";
}

export interface _TrailAlreadyExistsExceptionDetails {}
