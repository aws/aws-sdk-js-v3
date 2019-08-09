import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Query string parameters specified in the response body are not valid.</p>
 */
export interface InvalidQueryStringParameters
  extends __ServiceException__<_InvalidQueryStringParametersDetails> {
  name: "InvalidQueryStringParameters";
}

export interface _InvalidQueryStringParametersDetails {
  /**
   * _string shape
   */
  Message?: string;
}
