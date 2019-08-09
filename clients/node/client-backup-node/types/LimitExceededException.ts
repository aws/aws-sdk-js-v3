import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _string shape
   */
  Code?: string;

  /**
   * _string shape
   */
  Message?: string;

  /**
   * <p/>
   */
  Type?: string;

  /**
   * <p/>
   */
  Context?: string;
}
