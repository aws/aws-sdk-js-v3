import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is concurrent modification on a resource.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {}
