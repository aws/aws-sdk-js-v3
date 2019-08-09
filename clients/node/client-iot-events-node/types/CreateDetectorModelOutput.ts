import { _UnmarshalledDetectorModelConfiguration } from "./_DetectorModelConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDetectorModelOutput shape
 */
export interface CreateDetectorModelOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about how the detector model is configured.</p>
   */
  detectorModelConfiguration?: _UnmarshalledDetectorModelConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
