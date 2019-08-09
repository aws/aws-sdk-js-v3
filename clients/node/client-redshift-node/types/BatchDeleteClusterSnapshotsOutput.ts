import { _UnmarshalledSnapshotErrorMessage } from "./_SnapshotErrorMessage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteClusterSnapshotsOutput shape
 */
export interface BatchDeleteClusterSnapshotsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the snapshot identifiers that were deleted. </p>
   */
  Resources?: Array<string>;

  /**
   * <p>A list of any errors returned.</p>
   */
  Errors?: Array<_UnmarshalledSnapshotErrorMessage>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
