import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pipeline execution was specified in an invalid format or cannot be found, or an execution ID does not belong to the specified pipeline. </p>
 */
export interface PipelineExecutionNotFoundException
  extends __ServiceException__<_PipelineExecutionNotFoundExceptionDetails> {
  name: "PipelineExecutionNotFoundException";
}

export interface _PipelineExecutionNotFoundExceptionDetails {}
