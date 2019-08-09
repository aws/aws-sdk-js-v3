import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The state of the resource is not valid for this operation.</p>
 */
export interface InvalidResourceStateException
  extends __ServiceException__<_InvalidResourceStateExceptionDetails> {
  name: "InvalidResourceStateException";
}

export interface _InvalidResourceStateExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
