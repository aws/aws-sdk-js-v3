import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates you have been making requests too frequently and have been throttled. Wait for a while and try again. If higher call volume is warranted contact AWS Support.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
