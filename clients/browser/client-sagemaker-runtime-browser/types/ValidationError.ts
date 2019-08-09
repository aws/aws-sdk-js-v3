import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Inspect your request and try again. </p>
 */
export interface ValidationError
  extends __ServiceException__<_ValidationErrorDetails> {
  name: "ValidationError";
}

export interface _ValidationErrorDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
