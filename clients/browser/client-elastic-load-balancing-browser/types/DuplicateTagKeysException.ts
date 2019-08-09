import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A tag key was specified more than once.</p>
 */
export interface DuplicateTagKeysException
  extends __ServiceException__<_DuplicateTagKeysExceptionDetails> {
  name: "DuplicateTagKeysException";
}

export interface _DuplicateTagKeysExceptionDetails {}
