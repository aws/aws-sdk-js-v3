import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * <p>The error code returned when the query execution failed to process, or when the processing request for the named query failed.</p>
   */
  AthenaErrorCode?: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
