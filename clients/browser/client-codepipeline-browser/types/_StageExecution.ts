/**
 * <p>Represents information about the run of a stage.</p>
 */
export interface _StageExecution {
  /**
   * <p>The ID of the pipeline execution associated with the stage.</p>
   */
  pipelineExecutionId: string;

  /**
   * <p>The status of the stage, or for a completed stage, the last status of the stage.</p>
   */
  status: "InProgress" | "Failed" | "Succeeded" | string;
}

export type _UnmarshalledStageExecution = _StageExecution;
