import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified deletion parameter is not valid.</p>
 */
export interface InvalidDeletionParameterException
  extends __ServiceException__<_InvalidDeletionParameterExceptionDetails> {
  name: "InvalidDeletionParameterException";
}

export interface _InvalidDeletionParameterExceptionDetails {}
