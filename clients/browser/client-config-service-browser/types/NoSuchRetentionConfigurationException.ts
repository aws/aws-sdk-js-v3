import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have specified a retention configuration that does not exist.</p>
 */
export interface NoSuchRetentionConfigurationException
  extends __ServiceException__<_NoSuchRetentionConfigurationExceptionDetails> {
  name: "NoSuchRetentionConfigurationException";
}

export interface _NoSuchRetentionConfigurationExceptionDetails {}
