import { _UnmarshalledAssessmentTarget } from "./_AssessmentTarget";
import { _UnmarshalledFailedItemDetails } from "./_FailedItemDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAssessmentTargetsOutput shape
 */
export interface DescribeAssessmentTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the assessment targets.</p>
   */
  assessmentTargets: Array<_UnmarshalledAssessmentTarget>;

  /**
   * <p>Assessment target details that cannot be described. An error code is provided for each failed item.</p>
   */
  failedItems: { [key: string]: _UnmarshalledFailedItemDetails };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
