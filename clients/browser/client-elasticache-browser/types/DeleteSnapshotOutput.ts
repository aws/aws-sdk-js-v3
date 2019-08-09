import { _UnmarshalledSnapshot } from "./_Snapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteSnapshotOutput shape
 */
export interface DeleteSnapshotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.</p>
   */
  Snapshot?: _UnmarshalledSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
