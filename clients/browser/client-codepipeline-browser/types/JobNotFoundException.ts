import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified job was specified in an invalid format or cannot be found.</p>
 */
export interface JobNotFoundException
  extends __ServiceException__<_JobNotFoundExceptionDetails> {
  name: "JobNotFoundException";
}

export interface _JobNotFoundExceptionDetails {}
