import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The named revision does not exist with the IAM user or AWS account.</p>
 */
export interface RevisionDoesNotExistException
  extends __ServiceException__<_RevisionDoesNotExistExceptionDetails> {
  name: "RevisionDoesNotExistException";
}

export interface _RevisionDoesNotExistExceptionDetails {}
