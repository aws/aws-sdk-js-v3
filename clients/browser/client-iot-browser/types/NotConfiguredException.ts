import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is not configured.</p>
 */
export interface NotConfiguredException
  extends __ServiceException__<_NotConfiguredExceptionDetails> {
  name: "NotConfiguredException";
}

export interface _NotConfiguredExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
