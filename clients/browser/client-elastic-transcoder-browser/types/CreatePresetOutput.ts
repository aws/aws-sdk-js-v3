import { _UnmarshalledPreset } from "./_Preset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>CreatePresetResponse</code> structure.</p>
 */
export interface CreatePresetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A section of the response body that provides information about the preset that is created.</p>
   */
  Preset?: _UnmarshalledPreset;

  /**
   * <p>If the preset settings don't comply with the standards for the video codec but Elastic Transcoder created the preset, this message explains the reason the preset settings don't meet the standard. Elastic Transcoder created the preset because the settings might produce acceptable output.</p>
   */
  Warning?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
