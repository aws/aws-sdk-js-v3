import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal server error occurred.</p>
 */
export interface InternalServerError
  extends __ServiceException__<_InternalServerErrorDetails> {
  name: "InternalServerError";
}

export interface _InternalServerErrorDetails {
  /**
   * <p>An internal server error occurred.</p>
   */
  message?: string;
}
