import { _UnmarshalledJobExecution } from "./_JobExecution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobExecutionOutput shape
 */
export interface DescribeJobExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains data about a job execution.</p>
   */
  execution?: _UnmarshalledJobExecution;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
