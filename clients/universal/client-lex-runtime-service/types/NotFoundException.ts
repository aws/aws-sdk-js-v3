import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource (such as the Amazon Lex bot or an alias) that is referred to is not found.</p>
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
