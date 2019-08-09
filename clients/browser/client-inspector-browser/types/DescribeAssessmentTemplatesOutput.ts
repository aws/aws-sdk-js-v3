import { _UnmarshalledAssessmentTemplate } from "./_AssessmentTemplate";
import { _UnmarshalledFailedItemDetails } from "./_FailedItemDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAssessmentTemplatesOutput shape
 */
export interface DescribeAssessmentTemplatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the assessment templates.</p>
   */
  assessmentTemplates: Array<_UnmarshalledAssessmentTemplate>;

  /**
   * <p>Assessment template details that cannot be described. An error code is provided for each failed item.</p>
   */
  failedItems: { [key: string]: _UnmarshalledFailedItemDetails };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
