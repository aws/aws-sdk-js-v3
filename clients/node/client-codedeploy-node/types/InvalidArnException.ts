import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The specified ARN is not in a valid format. </p>
 */
export interface InvalidArnException
  extends __ServiceException__<_InvalidArnExceptionDetails> {
  name: "InvalidArnException";
}

export interface _InvalidArnExceptionDetails {}
