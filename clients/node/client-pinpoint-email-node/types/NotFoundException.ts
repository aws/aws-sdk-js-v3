import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource you attempted to access doesn't exist.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {}
