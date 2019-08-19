import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAssessmentTemplateOutput shape
 */
export interface CreateAssessmentTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN that specifies the assessment template that is created.</p>
   */
  assessmentTemplateArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
