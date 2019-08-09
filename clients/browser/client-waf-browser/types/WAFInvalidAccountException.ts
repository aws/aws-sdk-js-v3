import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 */
export interface WAFInvalidAccountException
  extends __ServiceException__<_WAFInvalidAccountExceptionDetails> {
  name: "WAFInvalidAccountException";
}

export interface _WAFInvalidAccountExceptionDetails {}
