/**
 * Settings for pausing a pipeline.
 */
export interface _PipelinePauseStateSettings {
  /**
   * Pipeline ID to pause ("PIPELINE_0" or "PIPELINE_1").
   */
  PipelineId: "PIPELINE_0" | "PIPELINE_1" | string;
}

export type _UnmarshalledPipelinePauseStateSettings = _PipelinePauseStateSettings;
