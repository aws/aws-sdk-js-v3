import { _UnmarshalledClusterInfo } from "./_ClusterInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClusterOutput shape
 */
export interface DescribeClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>The cluster information.</p>
   *
   */
  ClusterInfo?: _UnmarshalledClusterInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
