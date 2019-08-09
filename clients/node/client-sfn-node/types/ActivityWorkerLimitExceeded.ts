import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of workers concurrently polling for activity tasks has been reached.</p>
 */
export interface ActivityWorkerLimitExceeded
  extends __ServiceException__<_ActivityWorkerLimitExceededDetails> {
  name: "ActivityWorkerLimitExceeded";
}

export interface _ActivityWorkerLimitExceededDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
