import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This account already has five reports defined. To define a new report, you must delete an existing report.</p>
 */
export interface ReportLimitReachedException
  extends __ServiceException__<_ReportLimitReachedExceptionDetails> {
  name: "ReportLimitReachedException";
}

export interface _ReportLimitReachedExceptionDetails {
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}
