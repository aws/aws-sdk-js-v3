import { _UnmarshalledImageBuilder } from "./_ImageBuilder";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartImageBuilderOutput shape
 */
export interface StartImageBuilderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the image builder.</p>
   */
  ImageBuilder?: _UnmarshalledImageBuilder;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
