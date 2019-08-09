import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request has failed for an unspecified reason.</p>
 */
export interface RequestFailedException
  extends __ServiceException__<_RequestFailedExceptionDetails> {
  name: "RequestFailedException";
}

export interface _RequestFailedExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
