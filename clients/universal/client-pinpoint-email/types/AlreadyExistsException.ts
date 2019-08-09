import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified in your request already exists.</p>
 */
export interface AlreadyExistsException
  extends __ServiceException__<_AlreadyExistsExceptionDetails> {
  name: "AlreadyExistsException";
}

export interface _AlreadyExistsExceptionDetails {}
