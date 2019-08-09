import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 */
export interface RetryableConflictException
  extends __ServiceException__<_RetryableConflictExceptionDetails> {
  name: "RetryableConflictException";
}

export interface _RetryableConflictExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
