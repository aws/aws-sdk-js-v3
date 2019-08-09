import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user is not authorized to access a resource.</p>
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
}
