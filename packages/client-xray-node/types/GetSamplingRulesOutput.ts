import { _UnmarshalledSamplingRuleRecord } from "./_SamplingRuleRecord";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSamplingRulesOutput shape
 */
export interface GetSamplingRulesOutput {
  /**
   * <p>Rule definitions and metadata.</p>
   */
  SamplingRuleRecords?: Array<_UnmarshalledSamplingRuleRecord>;

  /**
   * <p>Pagination token. Not used.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
