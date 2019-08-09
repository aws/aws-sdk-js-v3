import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
 */
export interface DryRunOperation
  extends __ServiceException__<_DryRunOperationDetails> {
  name: "DryRunOperation";
}

export interface _DryRunOperationDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
