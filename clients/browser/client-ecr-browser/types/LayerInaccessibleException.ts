import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified layer is not available because it is not associated with an image. Unassociated image layers may be cleaned up at any time.</p>
 */
export interface LayerInaccessibleException
  extends __ServiceException__<_LayerInaccessibleExceptionDetails> {
  name: "LayerInaccessibleException";
}

export interface _LayerInaccessibleExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
