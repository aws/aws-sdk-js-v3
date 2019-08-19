import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutFunctionConcurrencyOutput shape
 */
export interface PutFunctionConcurrencyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
   */
  ReservedConcurrentExecutions?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
