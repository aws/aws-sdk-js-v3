import { _UnmarshalledQualificationType } from "./_QualificationType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateQualificationTypeOutput shape
 */
export interface UpdateQualificationTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Contains a QualificationType data structure.</p>
   */
  QualificationType?: _UnmarshalledQualificationType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
