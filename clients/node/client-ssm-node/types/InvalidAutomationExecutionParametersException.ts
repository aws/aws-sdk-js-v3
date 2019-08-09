import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The supplied parameters for invoking the specified Automation document are incorrect. For example, they may not match the set of parameters permitted for the specified Automation document.</p>
 */
export interface InvalidAutomationExecutionParametersException
  extends __ServiceException__<
    _InvalidAutomationExecutionParametersExceptionDetails
  > {
  name: "InvalidAutomationExecutionParametersException";
}

export interface _InvalidAutomationExecutionParametersExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
