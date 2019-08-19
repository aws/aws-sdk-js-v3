import {
  _PipelineActivity,
  _UnmarshalledPipelineActivity
} from "./_PipelineActivity";
import {
  _ReprocessingSummary,
  _UnmarshalledReprocessingSummary
} from "./_ReprocessingSummary";

/**
 * <p>Contains information about a pipeline.</p>
 */
export interface _Pipeline {
  /**
   * <p>The name of the pipeline.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the pipeline.</p>
   */
  arn?: string;

  /**
   * <p>The activities that perform transformations on the messages.</p>
   */
  activities?: Array<_PipelineActivity> | Iterable<_PipelineActivity>;

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   */
  reprocessingSummaries?:
    | Array<_ReprocessingSummary>
    | Iterable<_ReprocessingSummary>;

  /**
   * <p>When the pipeline was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The last time the pipeline was updated.</p>
   */
  lastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledPipeline extends _Pipeline {
  /**
   * <p>The activities that perform transformations on the messages.</p>
   */
  activities?: Array<_UnmarshalledPipelineActivity>;

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   */
  reprocessingSummaries?: Array<_UnmarshalledReprocessingSummary>;

  /**
   * <p>When the pipeline was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the pipeline was updated.</p>
   */
  lastUpdateTime?: Date;
}
