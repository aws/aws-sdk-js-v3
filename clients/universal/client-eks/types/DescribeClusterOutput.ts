import { _UnmarshalledCluster } from "./_Cluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClusterOutput shape
 */
export interface DescribeClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of your specified cluster.</p>
   */
  cluster?: _UnmarshalledCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
