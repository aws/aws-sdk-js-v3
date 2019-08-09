import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The target request is invalid.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {}
