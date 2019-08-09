import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAssessmentTemplatesOutput shape
 */
export interface ListAssessmentTemplatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of ARNs that specifies the assessment templates returned by the action.</p>
   */
  assessmentTemplateArns: Array<string>;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
