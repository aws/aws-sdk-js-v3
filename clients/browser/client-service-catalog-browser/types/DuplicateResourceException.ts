import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource is a duplicate.</p>
 */
export interface DuplicateResourceException
  extends __ServiceException__<_DuplicateResourceExceptionDetails> {
  name: "DuplicateResourceException";
}

export interface _DuplicateResourceExceptionDetails {}
