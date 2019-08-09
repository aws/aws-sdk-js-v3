import { _UnmarshalledJobMetadata } from "./_JobMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobOutput shape
 */
export interface DescribeJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a specific job, including shipping information, job status, and other important metadata.</p>
   */
  JobMetadata?: _UnmarshalledJobMetadata;

  /**
   * <p>Information about a specific job part (in the case of an export job), including shipping information, job status, and other important metadata.</p>
   */
  SubJobMetadata?: Array<_UnmarshalledJobMetadata>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
