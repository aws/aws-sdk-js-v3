import { _UnmarshalledConfigRuleEvaluationStatus } from "./_ConfigRuleEvaluationStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeConfigRuleEvaluationStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Status information about your AWS managed Config rules.</p>
   */
  ConfigRulesEvaluationStatus?: Array<_UnmarshalledConfigRuleEvaluationStatus>;

  /**
   * <p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
