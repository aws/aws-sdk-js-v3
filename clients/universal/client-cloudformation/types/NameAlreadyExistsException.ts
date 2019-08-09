import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified name is already in use.</p>
 */
export interface NameAlreadyExistsException
  extends __ServiceException__<_NameAlreadyExistsExceptionDetails> {
  name: "NameAlreadyExistsException";
}

export interface _NameAlreadyExistsExceptionDetails {}
