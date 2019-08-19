import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}
