import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The aggregation is invalid.</p>
 */
export interface InvalidAggregationException
  extends __ServiceException__<_InvalidAggregationExceptionDetails> {
  name: "InvalidAggregationException";
}

export interface _InvalidAggregationExceptionDetails {
  /**
   * __errorMessage shape
   */
  message?: string;
}
