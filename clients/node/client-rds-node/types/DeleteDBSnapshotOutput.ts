import { _UnmarshalledDBSnapshot } from "./_DBSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteDBSnapshotOutput shape
 */
export interface DeleteDBSnapshotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
   */
  DBSnapshot?: _UnmarshalledDBSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
