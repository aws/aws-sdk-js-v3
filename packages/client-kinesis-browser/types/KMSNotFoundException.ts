import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the specified entity or resource can't be found.</p>
 */
export interface KMSNotFoundException
  extends __ServiceException__<_KMSNotFoundExceptionDetails> {
  name: "KMSNotFoundException";
}

export interface _KMSNotFoundExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
