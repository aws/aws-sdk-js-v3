/**
 * <p>Provides updates to the parallelism count.</p>
 */
export interface _InputParallelismUpdate {
  /**
   * <p>Number of in-application streams to create for the specified streaming source.</p>
   */
  CountUpdate?: number;
}

export type _UnmarshalledInputParallelismUpdate = _InputParallelismUpdate;
