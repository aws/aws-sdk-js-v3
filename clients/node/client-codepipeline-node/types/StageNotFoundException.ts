import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified stage was specified in an invalid format or cannot be found.</p>
 */
export interface StageNotFoundException
  extends __ServiceException__<_StageNotFoundExceptionDetails> {
  name: "StageNotFoundException";
}

export interface _StageNotFoundExceptionDetails {}
