import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The limit has been reached on the number of labels for the specified resource.</p>
 */
export interface TooManyLabelsException
  extends __ServiceException__<_TooManyLabelsExceptionDetails> {
  name: "TooManyLabelsException";
}

export interface _TooManyLabelsExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
