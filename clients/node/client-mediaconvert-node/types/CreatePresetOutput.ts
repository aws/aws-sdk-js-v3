import { _UnmarshalledPreset } from "./_Preset";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePresetOutput shape
 */
export interface CreatePresetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: _UnmarshalledPreset;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
