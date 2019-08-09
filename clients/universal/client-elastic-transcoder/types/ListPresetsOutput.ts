import { _UnmarshalledPreset } from "./_Preset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>ListPresetsResponse</code> structure.</p>
 */
export interface ListPresetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Preset</code> objects.</p>
   */
  Presets?: Array<_UnmarshalledPreset>;

  /**
   * <p>A value that you use to access the second and subsequent pages of results, if any. When the presets fit on one page or when you've reached the last page of results, the value of <code>NextPageToken</code> is <code>null</code>.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
