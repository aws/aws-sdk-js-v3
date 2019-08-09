import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The configuration item size is outside the allowable range.</p>
 */
export interface OversizedConfigurationItemException
  extends __ServiceException__<_OversizedConfigurationItemExceptionDetails> {
  name: "OversizedConfigurationItemException";
}

export interface _OversizedConfigurationItemExceptionDetails {}
