import { _UnmarshalledCluster } from "./_Cluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteClusterOutput shape
 */
export interface DeleteClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of the deleted cluster.</p>
   */
  cluster?: _UnmarshalledCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
