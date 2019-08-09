import { _UnmarshalledClusterMetadata } from "./_ClusterMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClusterOutput shape
 */
export interface DescribeClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a specific cluster, including shipping information, cluster status, and other important metadata.</p>
   */
  ClusterMetadata?: _UnmarshalledClusterMetadata;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
