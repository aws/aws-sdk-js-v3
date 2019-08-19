import { _UnmarshalledQualificationType } from "./_QualificationType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateQualificationTypeOutput shape
 */
export interface CreateQualificationTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The created Qualification type, returned as a QualificationType data structure.</p>
   */
  QualificationType?: _UnmarshalledQualificationType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
