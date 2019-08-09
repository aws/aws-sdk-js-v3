import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified aggregator is not valid for inventory groups. Verify that the aggregator uses a valid inventory type such as <code>AWS:Application</code> or <code>AWS:InstanceInformation</code>.</p>
 */
export interface InvalidAggregatorException
  extends __ServiceException__<_InvalidAggregatorExceptionDetails> {
  name: "InvalidAggregatorException";
}

export interface _InvalidAggregatorExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
