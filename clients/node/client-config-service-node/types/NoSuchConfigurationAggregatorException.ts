import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have specified a configuration aggregator that does not exist.</p>
 */
export interface NoSuchConfigurationAggregatorException
  extends __ServiceException__<_NoSuchConfigurationAggregatorExceptionDetails> {
  name: "NoSuchConfigurationAggregatorException";
}

export interface _NoSuchConfigurationAggregatorExceptionDetails {}
