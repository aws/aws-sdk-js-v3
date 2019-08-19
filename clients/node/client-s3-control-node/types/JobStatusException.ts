import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface JobStatusException
  extends __ServiceException__<_JobStatusExceptionDetails> {
  name: "JobStatusException";
}

export interface _JobStatusExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
