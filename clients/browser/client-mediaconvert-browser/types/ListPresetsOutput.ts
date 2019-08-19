import { _UnmarshalledPreset } from "./_Preset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPresetsOutput shape
 */
export interface ListPresetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Use this string to request the next batch of presets.
   */
  NextToken?: string;

  /**
   * List of presets
   */
  Presets?: Array<_UnmarshalledPreset>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
