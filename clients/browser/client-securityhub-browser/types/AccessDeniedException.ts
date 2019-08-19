import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You don't have permission to perform the action specified in the request.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;

  /**
   * _NonEmptyString shape
   */
  Code?: string;
}
