import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The accelerator that you specified could not be disabled.</p>
 */
export interface AcceleratorNotDisabledException
  extends __ServiceException__<_AcceleratorNotDisabledExceptionDetails> {
  name: "AcceleratorNotDisabledException";
}

export interface _AcceleratorNotDisabledExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
