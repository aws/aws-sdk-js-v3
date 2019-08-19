import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified service does not support service-specific credentials.</p>
 */
export interface ServiceNotSupportedException
  extends __ServiceException__<_ServiceNotSupportedExceptionDetails> {
  name: "ServiceNotSupportedException";
}

export interface _ServiceNotSupportedExceptionDetails {
  /**
   * _serviceNotSupportedMessage shape
   */
  message?: string;
}
