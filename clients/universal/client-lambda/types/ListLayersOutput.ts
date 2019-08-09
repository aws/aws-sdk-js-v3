import { _UnmarshalledLayersListItem } from "./_LayersListItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLayersOutput shape
 */
export interface ListLayersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A pagination token returned when the response doesn't contain all layers.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of function layers.</p>
   */
  Layers?: Array<_UnmarshalledLayersListItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
