import { _UnmarshalledCluster } from "./_Cluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This output contains the description of the cluster.</p>
 */
export interface DescribeClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>This output contains the details for the requested cluster.</p>
   */
  Cluster?: _UnmarshalledCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
