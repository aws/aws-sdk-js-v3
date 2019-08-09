import { _UnmarshalledEventTrackerSummary } from "./_EventTrackerSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEventTrackersOutput shape
 */
export interface ListEventTrackersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of event trackers.</p>
   */
  eventTrackers?: Array<_UnmarshalledEventTrackerSummary>;

  /**
   * <p>A token for getting the next set of event trackers (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
