import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it attempted an operation which is not enabled.</p>
 */
export interface DisabledOperationException
  extends __ServiceException__<_DisabledOperationExceptionDetails> {
  name: "DisabledOperationException";
}

export interface _DisabledOperationExceptionDetails {}
