import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Another modification has already happened. Fetch <code>VersionId</code> again and use it to update the destination.</p>
 */
export interface ConcurrentModificationException
  extends __ServiceException__<_ConcurrentModificationExceptionDetails> {
  name: "ConcurrentModificationException";
}

export interface _ConcurrentModificationExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
