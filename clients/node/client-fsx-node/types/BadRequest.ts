import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A generic error indicating a failure with a client request.</p>
 */
export interface BadRequest extends __ServiceException__<_BadRequestDetails> {
  name: "BadRequest";
}

export interface _BadRequestDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
