import { _UnmarshalledMaintenanceTrack } from "./_MaintenanceTrack";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClusterTracksOutput shape
 */
export interface DescribeClusterTracksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of maintenance tracks output by the <code>DescribeClusterTracks</code> operation. </p>
   */
  MaintenanceTracks?: Array<_UnmarshalledMaintenanceTrack>;

  /**
   * <p>The starting point to return a set of response tracklist records. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
