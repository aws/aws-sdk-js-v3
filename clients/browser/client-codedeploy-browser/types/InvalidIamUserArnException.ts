import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The IAM user ARN was specified in an invalid format.</p>
 */
export interface InvalidIamUserArnException
  extends __ServiceException__<_InvalidIamUserArnExceptionDetails> {
  name: "InvalidIamUserArnException";
}

export interface _InvalidIamUserArnExceptionDetails {}
