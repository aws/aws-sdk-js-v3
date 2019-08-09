import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An Automation document with the specified name could not be found.</p>
 */
export interface AutomationDefinitionNotFoundException
  extends __ServiceException__<_AutomationDefinitionNotFoundExceptionDetails> {
  name: "AutomationDefinitionNotFoundException";
}

export interface _AutomationDefinitionNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
