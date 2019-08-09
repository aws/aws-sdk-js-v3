import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no DNS query logging configuration with the specified ID.</p>
 */
export interface NoSuchQueryLoggingConfig
  extends __ServiceException__<_NoSuchQueryLoggingConfigDetails> {
  name: "NoSuchQueryLoggingConfig";
}

export interface _NoSuchQueryLoggingConfigDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
