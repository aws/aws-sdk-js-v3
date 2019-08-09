import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You do not have access to perform this operation on this resource.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
