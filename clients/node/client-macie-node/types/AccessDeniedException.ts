import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;

  /**
   * Resource type that caused the exception
   */
  resourceType?: string;
}
