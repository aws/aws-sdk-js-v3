import { _UnmarshalledSnapshotTaskDetail } from "./_SnapshotTaskDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportSnapshotOutput shape
 */
export interface ImportSnapshotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A description of the import snapshot task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the import snapshot task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>Information about the import snapshot task.</p>
   */
  SnapshotTaskDetail?: _UnmarshalledSnapshotTaskDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
