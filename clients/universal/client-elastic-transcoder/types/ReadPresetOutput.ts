import { _UnmarshalledPreset } from "./_Preset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>ReadPresetResponse</code> structure.</p>
 */
export interface ReadPresetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A section of the response body that provides information about the preset.</p>
   */
  Preset?: _UnmarshalledPreset;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
