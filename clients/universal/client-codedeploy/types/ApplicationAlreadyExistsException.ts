import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An application with the specified name with the IAM user or AWS account already exists.</p>
 */
export interface ApplicationAlreadyExistsException
  extends __ServiceException__<_ApplicationAlreadyExistsExceptionDetails> {
  name: "ApplicationAlreadyExistsException";
}

export interface _ApplicationAlreadyExistsExceptionDetails {}
