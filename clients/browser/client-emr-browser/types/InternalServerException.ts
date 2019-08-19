import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception occurs when there is an internal failure in the EMR service.</p>
 */
export interface InternalServerException
  extends __ServiceException__<_InternalServerExceptionDetails> {
  name: "InternalServerException";
}

export interface _InternalServerExceptionDetails {
  /**
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
}
