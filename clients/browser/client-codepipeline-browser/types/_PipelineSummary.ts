/**
 * <p>Returns a summary of a pipeline.</p>
 */
export interface _PipelineSummary {
  /**
   * <p>The name of the pipeline.</p>
   */
  name?: string;

  /**
   * <p>The version number of the pipeline.</p>
   */
  version?: number;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The date and time of the last update to the pipeline, in timestamp format.</p>
   */
  updated?: Date | string | number;
}

export interface _UnmarshalledPipelineSummary extends _PipelineSummary {
  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The date and time of the last update to the pipeline, in timestamp format.</p>
   */
  updated?: Date;
}
