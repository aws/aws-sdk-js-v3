import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The listener that you specified doesn't exist.</p>
 */
export interface ListenerNotFoundException
  extends __ServiceException__<_ListenerNotFoundExceptionDetails> {
  name: "ListenerNotFoundException";
}

export interface _ListenerNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
