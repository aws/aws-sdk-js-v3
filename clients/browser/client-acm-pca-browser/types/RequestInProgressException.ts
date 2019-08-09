import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request is already in progress.</p>
 */
export interface RequestInProgressException
  extends __ServiceException__<_RequestInProgressExceptionDetails> {
  name: "RequestInProgressException";
}

export interface _RequestInProgressExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
