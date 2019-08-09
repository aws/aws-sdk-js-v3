import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified dashboard does not exist.</p>
 */
export interface DashboardNotFoundError
  extends __ServiceException__<_DashboardNotFoundErrorDetails> {
  name: "DashboardNotFoundError";
}

export interface _DashboardNotFoundErrorDetails {
  /**
   * _DashboardErrorMessage shape
   */
  message?: string;
}
