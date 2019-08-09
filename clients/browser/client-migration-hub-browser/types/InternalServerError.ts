import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
 */
export interface InternalServerError
  extends __ServiceException__<_InternalServerErrorDetails> {
  name: "InternalServerError";
}

export interface _InternalServerErrorDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
