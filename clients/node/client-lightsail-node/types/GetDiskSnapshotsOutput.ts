import { _UnmarshalledDiskSnapshot } from "./_DiskSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDiskSnapshotsOutput shape
 */
export interface GetDiskSnapshotsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects containing information about all block storage disk snapshots.</p>
   */
  diskSnapshots?: Array<_UnmarshalledDiskSnapshot>;

  /**
   * <p>A token used for advancing to the next page of results from your GetDiskSnapshots request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
