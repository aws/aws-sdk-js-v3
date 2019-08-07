/**
 * _Concurrency shape
 */
export interface _Concurrency {
  /**
   * <p>The number of concurrent executions reserved for this function. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
   */
  ReservedConcurrentExecutions?: number;
}

export type _UnmarshalledConcurrency = _Concurrency;
