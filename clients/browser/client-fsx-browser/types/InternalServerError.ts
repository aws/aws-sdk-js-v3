import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A generic error indicating a server-side failure.</p>
 */
export interface InternalServerError
  extends __ServiceException__<_InternalServerErrorDetails> {
  name: "InternalServerError";
}

export interface _InternalServerErrorDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
