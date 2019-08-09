import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified layers could not be found, or the specified layer is not valid for this repository.</p>
 */
export interface LayersNotFoundException
  extends __ServiceException__<_LayersNotFoundExceptionDetails> {
  name: "LayersNotFoundException";
}

export interface _LayersNotFoundExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
