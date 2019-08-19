import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}
