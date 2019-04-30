import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutFunctionConcurrencyOutput shape
 */
export interface PutFunctionConcurrencyOutput {
  /**
   * <p>The number of concurrent executions reserved for this function. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
   */
  ReservedConcurrentExecutions?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
