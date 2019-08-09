/**
 * <p>Limits that are related to concurrency and code storage. All file and storage sizes are in bytes.</p>
 */
export interface _AccountLimit {
  /**
   * <p>The amount of storage space that you can use for all deployment packages and layer archives.</p>
   */
  TotalCodeSize?: number;

  /**
   * <p>The maximum size of your function's code and layers when they're extracted.</p>
   */
  CodeSizeUnzipped?: number;

  /**
   * <p>The maximum size of a deployment package when it's uploaded directly to AWS Lambda. Use Amazon S3 for larger files.</p>
   */
  CodeSizeZipped?: number;

  /**
   * <p>The maximum number of simultaneous function executions.</p>
   */
  ConcurrentExecutions?: number;

  /**
   * <p>The maximum number of simultaneous function executions, minus the capacity that's reserved for individual functions with <a>PutFunctionConcurrency</a>.</p>
   */
  UnreservedConcurrentExecutions?: number;
}

export type _UnmarshalledAccountLimit = _AccountLimit;
