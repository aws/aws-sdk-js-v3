import { _UnmarshalledCluster } from "./_Cluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClusterOutput shape
 */
export interface CreateClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the cluster that was created.</p>
   */
  Cluster?: _UnmarshalledCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
