/**
 * <p>The pipeline configuration for a resolver of kind <code>PIPELINE</code>.</p>
 */
export interface _PipelineConfig {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPipelineConfig extends _PipelineConfig {
  /**
   * <p>A list of <code>Function</code> objects.</p>
   */
  functions?: Array<string>;
}
