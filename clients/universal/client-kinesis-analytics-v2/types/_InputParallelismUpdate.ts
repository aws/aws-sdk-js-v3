/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the parallelism count.</p>
 */
export interface _InputParallelismUpdate {
  /**
   * <p>The number of in-application streams to create for the specified streaming source.</p>
   */
  CountUpdate: number;
}

export type _UnmarshalledInputParallelismUpdate = _InputParallelismUpdate;
