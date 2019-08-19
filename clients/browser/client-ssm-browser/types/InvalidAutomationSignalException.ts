import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The signal is not valid for the current Automation execution.</p>
 */
export interface InvalidAutomationSignalException
  extends __ServiceException__<_InvalidAutomationSignalExceptionDetails> {
  name: "InvalidAutomationSignalException";
}

export interface _InvalidAutomationSignalExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
