import {
  _SourceRevision,
  _UnmarshalledSourceRevision
} from "./_SourceRevision";

/**
 * <p>Summary information about a pipeline execution.</p>
 */
export interface _PipelineExecutionSummary {
  /**
   * <p>The ID of the pipeline execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * <p>The status of the pipeline execution.</p> <ul> <li> <p>InProgress: The pipeline execution is currently running.</p> </li> <li> <p>Succeeded: The pipeline execution was completed successfully. </p> </li> <li> <p>Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. </p> </li> <li> <p>Failed: The pipeline execution was not completed successfully.</p> </li> </ul>
   */
  status?: "InProgress" | "Succeeded" | "Superseded" | "Failed" | string;

  /**
   * <p>The date and time when the pipeline execution began, in timestamp format.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>The date and time of the last change to the pipeline execution, in timestamp format.</p>
   */
  lastUpdateTime?: Date | string | number;

  /**
   * <p>A list of the source artifact revisions that initiated a pipeline execution.</p>
   */
  sourceRevisions?: Array<_SourceRevision> | Iterable<_SourceRevision>;
}

export interface _UnmarshalledPipelineExecutionSummary
  extends _PipelineExecutionSummary {
  /**
   * <p>The date and time when the pipeline execution began, in timestamp format.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time of the last change to the pipeline execution, in timestamp format.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>A list of the source artifact revisions that initiated a pipeline execution.</p>
   */
  sourceRevisions?: Array<_UnmarshalledSourceRevision>;
}
