import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There are no connectors available.</p>
 */
export interface NoConnectorsAvailableException
  extends __ServiceException__<_NoConnectorsAvailableExceptionDetails> {
  name: "NoConnectorsAvailableException";
}

export interface _NoConnectorsAvailableExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
