import { _UnmarshalledDBCluster } from "./_DBCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDBClusterOutput shape
 */
export interface CreateDBClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: _UnmarshalledDBCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
