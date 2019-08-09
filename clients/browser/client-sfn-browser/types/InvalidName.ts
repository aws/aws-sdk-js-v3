import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided name is invalid.</p>
 */
export interface InvalidName extends __ServiceException__<_InvalidNameDetails> {
  name: "InvalidName";
}

export interface _InvalidNameDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
