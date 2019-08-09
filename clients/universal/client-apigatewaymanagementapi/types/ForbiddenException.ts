import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The caller is not authorized to invoke this operation.</p>
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {}
