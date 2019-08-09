import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource could not be validated.</p>
 */
export interface ResourceValidationException
  extends __ServiceException__<_ResourceValidationExceptionDetails> {
  name: "ResourceValidationException";
}

export interface _ResourceValidationExceptionDetails {}
