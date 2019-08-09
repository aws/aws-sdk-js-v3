import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The IAM session ARN was specified in an invalid format.</p>
 */
export interface InvalidIamSessionArnException
  extends __ServiceException__<_InvalidIamSessionArnExceptionDetails> {
  name: "InvalidIamSessionArnException";
}

export interface _InvalidIamSessionArnExceptionDetails {}
