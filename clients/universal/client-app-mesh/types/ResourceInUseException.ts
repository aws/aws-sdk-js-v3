import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
