import { _UnmarshalledDBCluster } from "./_DBCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteDBClusterOutput shape
 */
export interface DeleteDBClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about a DB cluster. </p>
   */
  DBCluster?: _UnmarshalledDBCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
