import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You must specify values for all required parameters in the Systems Manager document. You can only supply values to parameters defined in the Systems Manager document.</p>
 */
export interface InvalidParameters
  extends __ServiceException__<_InvalidParametersDetails> {
  name: "InvalidParameters";
}

export interface _InvalidParametersDetails {
  /**
   * _String shape
   */
  Message?: string;
}
