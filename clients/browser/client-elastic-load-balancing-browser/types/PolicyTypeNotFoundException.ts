import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the specified policy types do not exist.</p>
 */
export interface PolicyTypeNotFoundException
  extends __ServiceException__<_PolicyTypeNotFoundExceptionDetails> {
  name: "PolicyTypeNotFoundException";
}

export interface _PolicyTypeNotFoundExceptionDetails {}
