import { _UnmarshalledLayerVersionsListItem } from "./_LayerVersionsListItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLayerVersionsOutput shape
 */
export interface ListLayerVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A pagination token returned when the response doesn't contain all versions.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of versions.</p>
   */
  LayerVersions?: Array<_UnmarshalledLayerVersionsListItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
