import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find a root with the <code>RootId</code> that you specified.</p>
 */
export interface RootNotFoundException
  extends __ServiceException__<_RootNotFoundExceptionDetails> {
  name: "RootNotFoundException";
}

export interface _RootNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
