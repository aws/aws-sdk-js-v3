import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You aren't authorized to perform the action.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {}
