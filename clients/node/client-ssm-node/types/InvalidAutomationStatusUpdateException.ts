import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified update status operation is not valid.</p>
 */
export interface InvalidAutomationStatusUpdateException
  extends __ServiceException__<_InvalidAutomationStatusUpdateExceptionDetails> {
  name: "InvalidAutomationStatusUpdateException";
}

export interface _InvalidAutomationStatusUpdateExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
