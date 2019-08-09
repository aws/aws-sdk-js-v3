import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Another modification is being made. That modification must complete before you can make your change.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {}
