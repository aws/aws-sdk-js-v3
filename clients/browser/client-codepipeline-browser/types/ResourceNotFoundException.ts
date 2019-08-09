import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource was specified in an invalid format.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {}
