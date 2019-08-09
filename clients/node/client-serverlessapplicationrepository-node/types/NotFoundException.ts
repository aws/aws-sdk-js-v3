import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * <p>404</p>
   */
  ErrorCode?: string;

  /**
   * <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   */
  Message?: string;
}
