import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Access to resource denied.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
