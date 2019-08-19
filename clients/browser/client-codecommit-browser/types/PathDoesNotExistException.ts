import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified path does not exist.</p>
 */
export interface PathDoesNotExistException
  extends __ServiceException__<_PathDoesNotExistExceptionDetails> {
  name: "PathDoesNotExistException";
}

export interface _PathDoesNotExistExceptionDetails {}
