import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A listener with the specified port already exists.</p>
 */
export interface DuplicateListenerException
  extends __ServiceException__<_DuplicateListenerExceptionDetails> {
  name: "DuplicateListenerException";
}

export interface _DuplicateListenerExceptionDetails {}
