/**
 * <p>Information about a pipeline.</p>
 */
export interface _PipelineMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  pipelineArn?: string;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   */
  updated?: Date | string | number;
}

export interface _UnmarshalledPipelineMetadata extends _PipelineMetadata {
  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   */
  updated?: Date;
}
