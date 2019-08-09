import { _UnmarshalledResourceComplianceSummaryItem } from "./_ResourceComplianceSummaryItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourceComplianceSummariesOutput shape
 */
export interface ListResourceComplianceSummariesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A summary count for specified or targeted managed instances. Summary count includes information about compliant and non-compliant State Manager associations, patch status, or custom items according to the filter criteria that you specify. </p>
   */
  ResourceComplianceSummaryItems?: Array<
    _UnmarshalledResourceComplianceSummaryItem
  >;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
