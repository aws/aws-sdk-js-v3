import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
 */
export interface UnauthorizedOperation
  extends __ServiceException__<_UnauthorizedOperationDetails> {
  name: "UnauthorizedOperation";
}

export interface _UnauthorizedOperationDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
