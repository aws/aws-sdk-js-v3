import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified job was not found. Check the job ID and try again.</p>
 */
export interface JobNotFoundException
  extends __ServiceException__<_JobNotFoundExceptionDetails> {
  name: "JobNotFoundException";
}

export interface _JobNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
