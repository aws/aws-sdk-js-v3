import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
