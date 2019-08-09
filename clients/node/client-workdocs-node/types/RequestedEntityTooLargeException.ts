import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The response is too large to return. The request must include a filter to reduce the size of the response.</p>
 */
export interface RequestedEntityTooLargeException
  extends __ServiceException__<_RequestedEntityTooLargeExceptionDetails> {
  name: "RequestedEntityTooLargeException";
}

export interface _RequestedEntityTooLargeExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
