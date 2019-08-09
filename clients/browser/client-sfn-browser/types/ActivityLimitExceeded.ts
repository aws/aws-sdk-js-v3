import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of activities has been reached. Existing activities must be deleted before a new activity can be created.</p>
 */
export interface ActivityLimitExceeded
  extends __ServiceException__<_ActivityLimitExceededDetails> {
  name: "ActivityLimitExceeded";
}

export interface _ActivityLimitExceededDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
