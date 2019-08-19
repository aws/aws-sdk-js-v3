import { _UnmarshalledInstanceSnapshot } from "./_InstanceSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstanceSnapshotsOutput shape
 */
export interface GetInstanceSnapshotsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the results of your get instance snapshots request.</p>
   */
  instanceSnapshots?: Array<_UnmarshalledInstanceSnapshot>;

  /**
   * <p>A token used for advancing to the next page of results from your get instance snapshots request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
