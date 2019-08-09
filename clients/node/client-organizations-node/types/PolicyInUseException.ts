import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The policy is attached to one or more entities. You must detach it from all roots, OUs, and accounts before performing this operation.</p>
 */
export interface PolicyInUseException
  extends __ServiceException__<_PolicyInUseExceptionDetails> {
  name: "PolicyInUseException";
}

export interface _PolicyInUseExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
