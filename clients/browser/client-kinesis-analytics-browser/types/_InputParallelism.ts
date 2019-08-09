/**
 * <p>Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
 */
export interface _InputParallelism {
  /**
   * <p>Number of in-application streams to create. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>
   */
  Count?: number;
}

export type _UnmarshalledInputParallelism = _InputParallelism;
