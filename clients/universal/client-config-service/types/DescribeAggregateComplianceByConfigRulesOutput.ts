import { _UnmarshalledAggregateComplianceByConfigRule } from "./_AggregateComplianceByConfigRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAggregateComplianceByConfigRulesOutput shape
 */
export interface DescribeAggregateComplianceByConfigRulesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a list of AggregateComplianceByConfigRule object.</p>
   */
  AggregateComplianceByConfigRules?: Array<
    _UnmarshalledAggregateComplianceByConfigRule
  >;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
