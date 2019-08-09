import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation is not valid on the specified resource.</p>
 */
export interface InvalidOperationException
  extends __ServiceException__<_InvalidOperationExceptionDetails> {
  name: "InvalidOperationException";
}

export interface _InvalidOperationExceptionDetails {}
