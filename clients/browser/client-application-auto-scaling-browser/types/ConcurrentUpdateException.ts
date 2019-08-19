import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to an Application Auto Scaling resource that already has a pending update.</p>
 */
export interface ConcurrentUpdateException
  extends __ServiceException__<_ConcurrentUpdateExceptionDetails> {
  name: "ConcurrentUpdateException";
}

export interface _ConcurrentUpdateExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
