import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the specified customer master key (CMK) isn't enabled.</p>
 */
export interface KMSDisabledException
  extends __ServiceException__<_KMSDisabledExceptionDetails> {
  name: "KMSDisabledException";
}

export interface _KMSDisabledExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
