import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user is undergoing transfer of ownership.</p>
 */
export interface IllegalUserStateException
  extends __ServiceException__<_IllegalUserStateExceptionDetails> {
  name: "IllegalUserStateException";
}

export interface _IllegalUserStateExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
