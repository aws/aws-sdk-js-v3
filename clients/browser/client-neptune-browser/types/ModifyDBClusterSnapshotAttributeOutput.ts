import { _UnmarshalledDBClusterSnapshotAttributesResult } from "./_DBClusterSnapshotAttributesResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyDBClusterSnapshotAttributeOutput shape
 */
export interface ModifyDBClusterSnapshotAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  DBClusterSnapshotAttributesResult?: _UnmarshalledDBClusterSnapshotAttributesResult;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
