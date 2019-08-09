import { _UnmarshalledPlaybackConfiguration } from "./_PlaybackConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPlaybackConfigurationsOutput shape
 */
export interface ListPlaybackConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored. </p>
   */
  Items?: Array<_UnmarshalledPlaybackConfiguration>;

  /**
   * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
