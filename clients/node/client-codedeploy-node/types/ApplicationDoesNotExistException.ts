import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The application does not exist with the IAM user or AWS account.</p>
 */
export interface ApplicationDoesNotExistException
  extends __ServiceException__<_ApplicationDoesNotExistExceptionDetails> {
  name: "ApplicationDoesNotExistException";
}

export interface _ApplicationDoesNotExistExceptionDetails {}
