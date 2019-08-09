import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
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
