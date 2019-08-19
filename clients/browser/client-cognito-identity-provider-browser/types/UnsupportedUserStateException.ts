import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because the user is in an unsupported state.</p>
 */
export interface UnsupportedUserStateException
  extends __ServiceException__<_UnsupportedUserStateExceptionDetails> {
  name: "UnsupportedUserStateException";
}

export interface _UnsupportedUserStateExceptionDetails {
  /**
   * <p>The message returned when the user is in an unsupported state.</p>
   */
  message?: string;
}
