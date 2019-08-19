import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The target resource cannot be found.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {}
