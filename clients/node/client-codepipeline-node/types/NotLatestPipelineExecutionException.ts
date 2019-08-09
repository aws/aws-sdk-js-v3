import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The stage has failed in a later run of the pipeline and the pipelineExecutionId associated with the request is out of date.</p>
 */
export interface NotLatestPipelineExecutionException
  extends __ServiceException__<_NotLatestPipelineExecutionExceptionDetails> {
  name: "NotLatestPipelineExecutionException";
}

export interface _NotLatestPipelineExecutionExceptionDetails {}
