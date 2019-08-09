import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The throttling limit has been exceeded.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
