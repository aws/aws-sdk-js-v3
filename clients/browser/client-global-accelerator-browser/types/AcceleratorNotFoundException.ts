import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The accelerator that you specified doesn't exist.</p>
 */
export interface AcceleratorNotFoundException
  extends __ServiceException__<_AcceleratorNotFoundExceptionDetails> {
  name: "AcceleratorNotFoundException";
}

export interface _AcceleratorNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
