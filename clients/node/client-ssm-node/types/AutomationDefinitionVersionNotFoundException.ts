import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An Automation document with the specified name and version could not be found.</p>
 */
export interface AutomationDefinitionVersionNotFoundException
  extends __ServiceException__<
    _AutomationDefinitionVersionNotFoundExceptionDetails
  > {
  name: "AutomationDefinitionVersionNotFoundException";
}

export interface _AutomationDefinitionVersionNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
