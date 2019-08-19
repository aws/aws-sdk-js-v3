import { _UnmarshalledComplianceSummaryItem } from "./_ComplianceSummaryItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListComplianceSummariesOutput shape
 */
export interface ListComplianceSummariesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of compliant and non-compliant summary counts based on compliance types. For example, this call returns State Manager associations, patches, or custom compliance types according to the filter criteria that you specified.</p>
   */
  ComplianceSummaryItems?: Array<_UnmarshalledComplianceSummaryItem>;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
