import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface IllegalActionException
  extends __ServiceException__<_IllegalActionExceptionDetails> {
  name: "IllegalActionException";
}

export interface _IllegalActionExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
