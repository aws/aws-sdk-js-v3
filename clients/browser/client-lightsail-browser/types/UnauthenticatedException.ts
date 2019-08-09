import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lightsail throws this exception when the user has not been authenticated.</p>
 */
export interface UnauthenticatedException
  extends __ServiceException__<_UnauthenticatedExceptionDetails> {
  name: "UnauthenticatedException";
}

export interface _UnauthenticatedExceptionDetails {
  /**
   * _string shape
   */
  code?: string;

  /**
   * _string shape
   */
  docs?: string;

  /**
   * _string shape
   */
  message?: string;

  /**
   * _string shape
   */
  tip?: string;
}
