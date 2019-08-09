import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no automation execution information for the requested automation execution ID.</p>
 */
export interface AutomationExecutionNotFoundException
  extends __ServiceException__<_AutomationExecutionNotFoundExceptionDetails> {
  name: "AutomationExecutionNotFoundException";
}

export interface _AutomationExecutionNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
