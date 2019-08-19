import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
 */
export interface PipelineNotFoundException
  extends __ServiceException__<_PipelineNotFoundExceptionDetails> {
  name: "PipelineNotFoundException";
}

export interface _PipelineNotFoundExceptionDetails {}
