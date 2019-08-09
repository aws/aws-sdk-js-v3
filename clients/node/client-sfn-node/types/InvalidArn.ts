import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided Amazon Resource Name (ARN) is invalid.</p>
 */
export interface InvalidArn extends __ServiceException__<_InvalidArnDetails> {
  name: "InvalidArn";
}

export interface _InvalidArnDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
