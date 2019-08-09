import { _UnmarshalledJobDetail } from "./_JobDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobsOutput shape
 */
export interface DescribeJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of jobs. </p>
   */
  jobs?: Array<_UnmarshalledJobDetail>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
