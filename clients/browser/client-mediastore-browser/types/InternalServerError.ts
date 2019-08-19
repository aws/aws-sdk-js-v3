import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service is temporarily unavailable.</p>
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
