import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified step name and execution ID don't exist. Verify the information and try again.</p>
 */
export interface AutomationStepNotFoundException
  extends __ServiceException__<_AutomationStepNotFoundExceptionDetails> {
  name: "AutomationStepNotFoundException";
}

export interface _AutomationStepNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
