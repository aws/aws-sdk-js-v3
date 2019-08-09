import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface MethodNotAllowedException
  extends __ServiceException__<_MethodNotAllowedExceptionDetails> {
  name: "MethodNotAllowedException";
}

export interface _MethodNotAllowedExceptionDetails {
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}
