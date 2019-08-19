import { _UnmarshalledAggregateEvaluationResult } from "./_AggregateEvaluationResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAggregateComplianceDetailsByConfigRuleOutput shape
 */
export interface GetAggregateComplianceDetailsByConfigRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns an AggregateEvaluationResults object.</p>
   */
  AggregateEvaluationResults?: Array<_UnmarshalledAggregateEvaluationResult>;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
