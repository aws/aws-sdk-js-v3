import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided JSON input data is invalid.</p>
 */
export interface InvalidExecutionInput
  extends __ServiceException__<_InvalidExecutionInputDetails> {
  name: "InvalidExecutionInput";
}

export interface _InvalidExecutionInputDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
