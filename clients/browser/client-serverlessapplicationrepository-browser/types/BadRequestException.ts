import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One of the parameters in the request is invalid.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * <p>400</p>
   */
  ErrorCode?: string;

  /**
   * <p>One of the parameters in the request is invalid.</p>
   */
  Message?: string;
}
