import { _UnmarshalledModerationLabel } from "./_ModerationLabel";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectModerationLabelsOutput shape
 */
export interface DetectModerationLabelsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Array of detected Moderation labels and the time, in millseconds from the start of the video, they were detected.</p>
   */
  ModerationLabels?: Array<_UnmarshalledModerationLabel>;

  /**
   * <p>Version number of the moderation detection model that was used to detect unsafe content.</p>
   */
  ModerationModelVersion?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
