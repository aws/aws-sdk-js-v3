import { _UnmarshalledEventSourceMappingConfiguration } from "./_EventSourceMappingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEventSourceMappingsOutput shape
 */
export interface ListEventSourceMappingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A pagination token that's returned when the response doesn't contain all event source mappings.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of event source mappings.</p>
   */
  EventSourceMappings?: Array<_UnmarshalledEventSourceMappingConfiguration>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
