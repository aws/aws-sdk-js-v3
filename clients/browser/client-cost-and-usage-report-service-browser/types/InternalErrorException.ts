import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export interface InternalErrorException
  extends __ServiceException__<_InternalErrorExceptionDetails> {
  name: "InternalErrorException";
}

export interface _InternalErrorExceptionDetails {
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}
