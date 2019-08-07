import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Simple message object.
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * The error message that's returned from the API.
   */
  Message?: string;

  /**
   * The unique message body ID.
   */
  RequestID?: string;
}
