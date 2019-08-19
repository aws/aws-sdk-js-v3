import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified account has reached its limit of configuration templates.</p>
 */
export interface TooManyConfigurationTemplatesException
  extends __ServiceException__<_TooManyConfigurationTemplatesExceptionDetails> {
  name: "TooManyConfigurationTemplatesException";
}

export interface _TooManyConfigurationTemplatesExceptionDetails {}
