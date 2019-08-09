import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource registration failed.</p>
 */
export interface ResourceRegistrationFailureException
  extends __ServiceException__<_ResourceRegistrationFailureExceptionDetails> {
  name: "ResourceRegistrationFailureException";
}

export interface _ResourceRegistrationFailureExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
