import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
 */
export interface AlreadyStreamedException
  extends __ServiceException__<_AlreadyStreamedExceptionDetails> {
  name: "AlreadyStreamedException";
}

export interface _AlreadyStreamedExceptionDetails {
  /**
   * The message associated with the AlreadyStreamedException exception.
   */
  message: string;
}
