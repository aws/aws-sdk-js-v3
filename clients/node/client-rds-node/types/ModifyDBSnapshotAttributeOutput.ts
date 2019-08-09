import { _UnmarshalledDBSnapshotAttributesResult } from "./_DBSnapshotAttributesResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyDBSnapshotAttributeOutput shape
 */
export interface ModifyDBSnapshotAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p>
   */
  DBSnapshotAttributesResult?: _UnmarshalledDBSnapshotAttributesResult;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
