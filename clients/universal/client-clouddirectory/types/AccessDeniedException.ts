import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Access denied. Check your permissions.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
