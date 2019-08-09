import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is in a state that does not allow you to perform a specified action. </p>
 */
export interface InvalidStateException
  extends __ServiceException__<_InvalidStateExceptionDetails> {
  name: "InvalidStateException";
}

export interface _InvalidStateExceptionDetails {
  /**
   * <p>Error or informational message that provides more detail if a resource is in a state that is not valid for performing a specified action. </p>
   */
  Message?: string;
}
