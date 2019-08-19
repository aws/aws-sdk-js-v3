import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the request was throttled.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * <p>The reason for the query throttling, for example, when it exceeds the concurrent query limit.</p>
   */
  Reason?: "CONCURRENT_QUERY_LIMIT_EXCEEDED" | string;
}
