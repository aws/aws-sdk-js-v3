import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * <p>The error message returned by this <code>NotFoundException</code> error.</p>
   */
  message?: string;
}
