import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>More than one process tried to modify a resource at the same time.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {}
