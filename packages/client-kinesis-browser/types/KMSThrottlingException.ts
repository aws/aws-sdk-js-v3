import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was denied due to request throttling. For more information about throttling, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export interface KMSThrottlingException
  extends __ServiceException__<_KMSThrottlingExceptionDetails> {
  name: "KMSThrottlingException";
}

export interface _KMSThrottlingExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
