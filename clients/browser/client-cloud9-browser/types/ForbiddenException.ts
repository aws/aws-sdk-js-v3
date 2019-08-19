import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An access permissions issue occurred.</p>
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {}
