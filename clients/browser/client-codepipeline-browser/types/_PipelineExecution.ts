import {
  _ArtifactRevision,
  _UnmarshalledArtifactRevision
} from "./_ArtifactRevision";

/**
 * <p>Represents information about an execution of a pipeline.</p>
 */
export interface _PipelineExecution {
  /**
   * <p>The name of the pipeline that was executed.</p>
   */
  pipelineName?: string;

  /**
   * <p>The version number of the pipeline that was executed.</p>
   */
  pipelineVersion?: number;

  /**
   * <p>The ID of the pipeline execution.</p>
   */
  pipelineExecutionId?: string;

  /**
   * <p>The status of the pipeline execution.</p> <ul> <li> <p>InProgress: The pipeline execution is currently running.</p> </li> <li> <p>Succeeded: The pipeline execution was completed successfully. </p> </li> <li> <p>Superseded: While this pipeline execution was waiting for the next stage to be completed, a newer pipeline execution advanced and continued through the pipeline instead. </p> </li> <li> <p>Failed: The pipeline execution was not completed successfully.</p> </li> </ul>
   */
  status?: "InProgress" | "Succeeded" | "Superseded" | "Failed" | string;

  /**
   * <p>A list of <code>ArtifactRevision</code> objects included in a pipeline execution.</p>
   */
  artifactRevisions?: Array<_ArtifactRevision> | Iterable<_ArtifactRevision>;
}

export interface _UnmarshalledPipelineExecution extends _PipelineExecution {
  /**
   * <p>A list of <code>ArtifactRevision</code> objects included in a pipeline execution.</p>
   */
  artifactRevisions?: Array<_UnmarshalledArtifactRevision>;
}
