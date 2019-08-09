import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 */
export interface DisabledOperationException
  extends __ServiceException__<_DisabledOperationExceptionDetails> {
  name: "DisabledOperationException";
}

export interface _DisabledOperationExceptionDetails {}
