import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified resource is in use.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {}
