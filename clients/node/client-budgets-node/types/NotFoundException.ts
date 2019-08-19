import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can’t locate the resource that you specified.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}
