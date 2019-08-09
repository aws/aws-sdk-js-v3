import { _UnmarshalledEnvironment } from "./_Environment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEnvironmentsOutput shape
 */
export interface DescribeEnvironmentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the environments that are returned.</p>
   */
  environments?: Array<_UnmarshalledEnvironment>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
