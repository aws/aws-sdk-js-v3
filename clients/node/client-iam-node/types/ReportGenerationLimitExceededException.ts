import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because the maximum number of concurrent requests for this account are already running.</p>
 */
export interface ReportGenerationLimitExceededException
  extends __ServiceException__<_ReportGenerationLimitExceededExceptionDetails> {
  name: "ReportGenerationLimitExceededException";
}

export interface _ReportGenerationLimitExceededExceptionDetails {
  /**
   * _reportGenerationLimitExceededMessage shape
   */
  message?: string;
}
