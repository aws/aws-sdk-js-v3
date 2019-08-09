import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was denied due to request throttling. For more information about throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in the <i>AWS Key Management Service Developer Guide.</i> </p>
 */
export interface KMSThrottlingException
  extends __ServiceException__<_KMSThrottlingExceptionDetails> {
  name: "KMSThrottlingException";
}

export interface _KMSThrottlingExceptionDetails {
  /**
   * _string shape
   */
  message?: string;
}
