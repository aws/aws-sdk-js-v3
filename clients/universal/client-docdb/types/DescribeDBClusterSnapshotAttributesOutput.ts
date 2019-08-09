import { _UnmarshalledDBClusterSnapshotAttributesResult } from "./_DBClusterSnapshotAttributesResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDBClusterSnapshotAttributesOutput shape
 */
export interface DescribeDBClusterSnapshotAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the attributes that are associated with a DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributesResult?: _UnmarshalledDBClusterSnapshotAttributesResult;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
