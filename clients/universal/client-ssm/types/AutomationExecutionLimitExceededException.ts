import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of simultaneously running Automation executions exceeded the allowable limit.</p>
 */
export interface AutomationExecutionLimitExceededException
  extends __ServiceException__<
    _AutomationExecutionLimitExceededExceptionDetails
  > {
  name: "AutomationExecutionLimitExceededException";
}

export interface _AutomationExecutionLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
