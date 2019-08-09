import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lightsail throws this exception when it cannot find a resource.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
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
