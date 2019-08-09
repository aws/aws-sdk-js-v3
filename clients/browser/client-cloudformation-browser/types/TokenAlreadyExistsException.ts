import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A client request token already exists.</p>
 */
export interface TokenAlreadyExistsException
  extends __ServiceException__<_TokenAlreadyExistsExceptionDetails> {
  name: "TokenAlreadyExistsException";
}

export interface _TokenAlreadyExistsExceptionDetails {}
