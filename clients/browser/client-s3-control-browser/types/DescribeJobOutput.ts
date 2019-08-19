import { _UnmarshalledJobDescriptor } from "./_JobDescriptor";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeJobOutput shape
 */
export interface DescribeJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the configuration parameters and status for the job specified in the <code>Describe Job</code> request.</p>
   */
  Job?: _UnmarshalledJobDescriptor;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
