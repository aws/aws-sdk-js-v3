import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is being modified by another operation or thread.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {}
