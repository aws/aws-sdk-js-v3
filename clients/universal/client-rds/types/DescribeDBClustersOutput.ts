import { _UnmarshalledDBCluster } from "./_DBCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.</p>
 */
export interface DescribeDBClustersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A pagination token that can be used in a subsequent DescribeDBClusters request.</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of DB clusters for the user.</p>
   */
  DBClusters?: Array<_UnmarshalledDBCluster>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
