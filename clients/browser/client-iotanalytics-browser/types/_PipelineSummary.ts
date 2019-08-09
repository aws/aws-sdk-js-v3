import {
  _ReprocessingSummary,
  _UnmarshalledReprocessingSummary
} from "./_ReprocessingSummary";

/**
 * <p>A summary of information about a pipeline.</p>
 */
export interface _PipelineSummary {
  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName?: string;

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
   * <p>When the pipeline was last updated.</p>
   */
  lastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledPipelineSummary extends _PipelineSummary {
  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   */
  reprocessingSummaries?: Array<_UnmarshalledReprocessingSummary>;

  /**
   * <p>When the pipeline was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the pipeline was last updated.</p>
   */
  lastUpdateTime?: Date;
}
