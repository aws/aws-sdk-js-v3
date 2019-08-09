import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAssessmentTargetOutput shape
 */
export interface CreateAssessmentTargetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN that specifies the assessment target that is created.</p>
   */
  assessmentTargetArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
