import { _UnmarshalledReviewPolicy } from "./_ReviewPolicy";
import { _UnmarshalledReviewReport } from "./_ReviewReport";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListReviewPolicyResultsForHITOutput shape
 */
export interface ListReviewPolicyResultsForHITOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The HITId of the HIT for which results have been returned.</p>
   */
  HITId?: string;

  /**
   * <p> The name of the Assignment-level Review Policy. This contains only the PolicyName element. </p>
   */
  AssignmentReviewPolicy?: _UnmarshalledReviewPolicy;

  /**
   * <p>The name of the HIT-level Review Policy. This contains only the PolicyName element.</p>
   */
  HITReviewPolicy?: _UnmarshalledReviewPolicy;

  /**
   * <p> Contains both ReviewResult and ReviewAction elements for an Assignment. </p>
   */
  AssignmentReviewReport?: _UnmarshalledReviewReport;

  /**
   * <p>Contains both ReviewResult and ReviewAction elements for a particular HIT. </p>
   */
  HITReviewReport?: _UnmarshalledReviewReport;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
