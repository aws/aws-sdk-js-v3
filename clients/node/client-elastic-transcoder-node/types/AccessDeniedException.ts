import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>General authentication failure. The request was not signed correctly.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {}
