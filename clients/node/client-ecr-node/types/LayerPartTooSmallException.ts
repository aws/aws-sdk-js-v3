import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Layer parts must be at least 5 MiB in size.</p>
 */
export interface LayerPartTooSmallException
  extends __ServiceException__<_LayerPartTooSmallExceptionDetails> {
  name: "LayerPartTooSmallException";
}

export interface _LayerPartTooSmallExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
