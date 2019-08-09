/**
 * Runtime details of a pipeline when a channel is running.
 */
export interface _PipelineDetail {
  /**
   * The name of the active input attachment currently being ingested by this pipeline.
   */
  ActiveInputAttachmentName?: string;

  /**
   * The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.
   */
  ActiveInputSwitchActionName?: string;

  /**
   * Pipeline ID
   */
  PipelineId?: string;
}

export type _UnmarshalledPipelineDetail = _PipelineDetail;
