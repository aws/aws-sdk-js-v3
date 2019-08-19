import { _UnmarshalledDBCluster } from "./_DBCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartDBClusterOutput shape
 */
export interface StartDBClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
   */
  DBCluster?: _UnmarshalledDBCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
