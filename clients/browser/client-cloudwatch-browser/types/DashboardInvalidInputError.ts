import { _UnmarshalledDashboardValidationMessage } from "./_DashboardValidationMessage";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Some part of the dashboard data is invalid.</p>
 */
export interface DashboardInvalidInputError
  extends __ServiceException__<_DashboardInvalidInputErrorDetails> {
  name: "DashboardInvalidInputError";
}

export interface _DashboardInvalidInputErrorDetails {
  /**
   * _DashboardErrorMessage shape
   */
  message?: string;

  /**
   * _DashboardValidationMessages shape
   */
  dashboardValidationMessages?: Array<_UnmarshalledDashboardValidationMessage>;
}
