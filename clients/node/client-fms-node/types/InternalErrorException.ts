import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 */
export interface InternalErrorException
  extends __ServiceException__<_InternalErrorExceptionDetails> {
  name: "InternalErrorException";
}

export interface _InternalErrorExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
