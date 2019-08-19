import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided JSON output data is invalid.</p>
 */
export interface InvalidOutput
  extends __ServiceException__<_InvalidOutputDetails> {
  name: "InvalidOutput";
}

export interface _InvalidOutputDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
