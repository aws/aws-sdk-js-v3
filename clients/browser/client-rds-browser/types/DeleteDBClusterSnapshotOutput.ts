import { _UnmarshalledDBClusterSnapshot } from "./_DBClusterSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteDBClusterSnapshotOutput shape
 */
export interface DeleteDBClusterSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
   */
  DBClusterSnapshot?: _UnmarshalledDBClusterSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
