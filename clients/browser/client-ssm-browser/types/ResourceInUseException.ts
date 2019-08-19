import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Error returned if an attempt is made to delete a patch baseline that is registered for a patch group.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
