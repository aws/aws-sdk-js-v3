import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The serice is temporary unavailable.</p>
 */
export interface ServiceTemporarilyUnavailableException
  extends __ServiceException__<_ServiceTemporarilyUnavailableExceptionDetails> {
  name: "ServiceTemporarilyUnavailableException";
}

export interface _ServiceTemporarilyUnavailableExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p>You can wait and then retry your request.</p>
   */
  canRetry: boolean;
}
