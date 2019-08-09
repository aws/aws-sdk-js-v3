/**
 * <p>An execution property of a job.</p>
 */
export interface _ExecutionProperty {
  /**
   * <p>The maximum number of concurrent runs allowed for the job. The default is 1. An error is returned when this threshold is reached. The maximum value you can specify is controlled by a service limit.</p>
   */
  MaxConcurrentRuns?: number;
}

export type _UnmarshalledExecutionProperty = _ExecutionProperty;
