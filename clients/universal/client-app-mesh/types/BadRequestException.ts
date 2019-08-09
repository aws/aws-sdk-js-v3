import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request syntax was malformed. Check your request syntax and try again.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
