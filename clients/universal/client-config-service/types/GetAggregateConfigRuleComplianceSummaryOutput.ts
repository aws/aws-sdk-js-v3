import { _UnmarshalledAggregateComplianceCount } from "./_AggregateComplianceCount";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAggregateConfigRuleComplianceSummaryOutput shape
 */
export interface GetAggregateConfigRuleComplianceSummaryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Groups the result based on ACCOUNT_ID or AWS_REGION.</p>
   */
  GroupByKey?: string;

  /**
   * <p>Returns a list of AggregateComplianceCounts object.</p>
   */
  AggregateComplianceCounts?: Array<_UnmarshalledAggregateComplianceCount>;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
