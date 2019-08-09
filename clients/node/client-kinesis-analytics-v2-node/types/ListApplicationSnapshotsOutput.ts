import { _UnmarshalledSnapshotDetails } from "./_SnapshotDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApplicationSnapshotsOutput shape
 */
export interface ListApplicationSnapshotsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A collection of objects containing information about the application snapshots.</p>
   */
  SnapshotSummaries?: Array<_UnmarshalledSnapshotDetails>;

  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
