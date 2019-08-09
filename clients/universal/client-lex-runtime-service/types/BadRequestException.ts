import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Request validation failed, there is no usable message in the context, or the bot build failed, is still in progress, or contains unbuilt changes. </p>
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
