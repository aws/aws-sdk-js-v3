/**
 * <p>Provides limits of code size and concurrency associated with the current account and region. For more information or to request a limit increase for concurrent executions, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Lambda Limits</a>. </p>
 */
export interface _AccountLimit {
  /**
   * <p>Maximum size, in bytes, of a code package you can upload per region. The default size is 75 GB. </p>
   */
  TotalCodeSize?: number;

  /**
   * <p>Size, in bytes, of code/dependencies that you can zip into a deployment package (uncompressed zip/jar size) for uploading. The default limit is 250 MB.</p>
   */
  CodeSizeUnzipped?: number;

  /**
   * <p>Size, in bytes, of a single zipped code/dependencies package you can upload for your Lambda function(.zip/.jar file). Try using Amazon S3 for uploading larger files. Default limit is 50 MB.</p>
   */
  CodeSizeZipped?: number;

  /**
   * <p>Number of simultaneous executions of your function per region. The default limit is 1000.</p>
   */
  ConcurrentExecutions?: number;

  /**
   * <p>The number of concurrent executions available to functions that do not have concurrency limits set. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
   */
  UnreservedConcurrentExecutions?: number;
}

export type _UnmarshalledAccountLimit = _AccountLimit;
