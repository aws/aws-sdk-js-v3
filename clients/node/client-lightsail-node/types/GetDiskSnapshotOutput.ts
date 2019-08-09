import { _UnmarshalledDiskSnapshot } from "./_DiskSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDiskSnapshotOutput shape
 */
export interface GetDiskSnapshotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about the disk snapshot.</p>
   */
  diskSnapshot?: _UnmarshalledDiskSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
