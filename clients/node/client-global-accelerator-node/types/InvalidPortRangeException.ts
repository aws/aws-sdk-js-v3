import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 */
export interface InvalidPortRangeException
  extends __ServiceException__<_InvalidPortRangeExceptionDetails> {
  name: "InvalidPortRangeException";
}

export interface _InvalidPortRangeExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
