import { _UnmarshalledConnection } from "./_Connection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConnectionsOutput shape
 */
export interface DescribeConnectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The connections.</p>
   */
  connections?: Array<_UnmarshalledConnection>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
