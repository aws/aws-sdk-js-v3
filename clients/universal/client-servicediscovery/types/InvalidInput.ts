import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.</p>
 */
export interface InvalidInput
  extends __ServiceException__<_InvalidInputDetails> {
  name: "InvalidInput";
}

export interface _InvalidInputDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
